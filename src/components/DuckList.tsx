import DuckItem from './DuckItem';
import IDuck from '../interfaces/DuckInterface'
import { useAppSelector } from '../store/hooks';
import { selectDucks } from '../store/slices/duckSlice';
import { StyledGridContainer, StyledTitle } from '../styling/components/List';

function DuckList() {
  const duckList: IDuck[] = useAppSelector(selectDucks);

  return (
    <div>
      {
        duckList.length == 0 ? <div>Loading...</div> : 
      <>
        <StyledTitle>Duck List</StyledTitle>
          <StyledGridContainer>
            {duckList.map((duck) => (
              <div key={duck.id}>
                <DuckItem key={duck.id} duck={duck} />
              </div>
            ))}
          </StyledGridContainer>
      </>
      }
    </div>
  );
}

export default DuckList;
