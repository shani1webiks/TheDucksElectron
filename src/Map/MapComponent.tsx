import { useEffect, useRef } from "react";
import { Map, View, Feature } from "ol";
import { OSM, Vector } from "ol/source";
import TileLayer from "ol/layer/Tile.js";
import VectorLayer from "ol/layer/Vector";
// import Style from "ol/style/Style";
// import Icon from "ol/style/Icon";
// import { Geometry, Point } from "ol/geom";
// import { fromLonLat } from "ol/proj";
import IDuck from "../interfaces/DuckInterface";
import IRabbit from "../interfaces/RabbitInterface";
import { selectDucks } from "../store/slices/duckSlice";
import { selectRabbits } from "../store/slices/rabbitSlice";
import { useAppSelector } from "../store/hooks";
import { StyledMap } from "../styling/components/Map";
import BaseLayer from "ol/layer/Base";

function MapComponent() {
  const duckList: IDuck[] = useAppSelector(selectDucks);
  const rabbitList: IRabbit[] = useAppSelector(selectRabbits);

  // const createVectorLayer = (features: Feature[]): VectorLayer<Vector<Geometry>> => {
  //   let layer: VectorLayer<Vector<Geometry>> = new VectorLayer({
  //     source: new Vector({
  //       features,
  //     })
  //   });
  //   return layer;
  // };

  const mapRef = useRef<Map|undefined>()
  const baseLayer: BaseLayer = new TileLayer({
    source: new OSM(),
  });
  const duckFeatures: Feature[] = [];
  const rabbitFeatures: Feature[] = [];
  // const duckLayer: VectorLayer<Vector<Geometry>> = createVectorLayer([]);
  // const rabbitLayer: VectorLayer<Vector<Geometry>> = createVectorLayer([]);

  // useEffect(() => {
  //   if (!mapRef.current) initMap();
    
  //   return () => {
  //   };
  // }, []);
  
  // useEffect(() => {
  //   if (!mapRef.current) return;
  //   if(duckFeatures.length != duckList.length) updateDucks();
  //   if(rabbitFeatures.length != rabbitList.length) updateRabbits();
  //   mapRef.current?.setLayers([baseLayer, duckLayer as BaseLayer, rabbitLayer as BaseLayer]);
  //   return () => {
  //   };
  // }, [duckList.length, rabbitList.length]);


  // const updateDucks = (): void => {
  //   var idx: number, id: number | string | undefined;
  //   var arr: number[] = [];

  //   for (let i = 0; i < duckFeatures.length; i++) {
  //     id = duckFeatures[i].getId();
  //     idx = duckList.findIndex(duck => duck.id == id);
  //     if(idx < 0){
  //       duckLayer?.getSource()?.removeFeature(duckFeatures[i]);
  //     } else arr[idx] = 1;
  //   }
    
  //   for (let i = 0; i < duckList.length; i++) {
  //     if(!arr[i]){
  //       duckFeatures.push(createFeature(duckList[i]));
  //       duckLayer?.getSource()?.addFeature(createFeature(duckList[i]));
  //     }
  //   }
  // }

  // const updateRabbits = (): void => {
  //   var idx: number, id: number | string | undefined;
  //   var arr: number[] = [];

  //   for (let i = 0; i < rabbitFeatures.length; i++) {
  //     id = rabbitFeatures[i].getId();
  //     idx = rabbitList.findIndex(rabbit => rabbit.id == id);
  //     if(idx < 0){
  //       rabbitLayer?.getSource()?.removeFeature(rabbitFeatures[i]);
  //     } else arr[idx] = 1;
  //   }
    
  //   for (let i = 0; i < rabbitList.length; i++) {
  //     if(!arr[i]){
  //       rabbitFeatures.push(createFeature(rabbitList[i]));
  //       rabbitLayer?.getSource()?.addFeature(createFeature(rabbitList[i]));
  //     }
  //   }
  // }

  // const initMap = (): void => {
  //   mapRef.current = createMap();
  //   mapRef.current.addLayer(duckLayer);
  //   mapRef.current.addLayer(rabbitLayer);
  //   mapRef.current.addLayer(baseLayer);
  // }

  // const createMap = (): Map => {
  //   var newMap: Map = new Map({
  //     layers: [
  //     ],
  //     target: "map",
  //     view: new View({
  //       center: fromLonLat([2.2945, 48.8584]),
  //       zoom: 1,
  //     }),
  //   });
  //   return newMap;
  // };

  // const createFeature = ({latitude,longitude,img_src, id}: {latitude: number;longitude: number;img_src: string;id: number}): Feature => {
  //   let feature: Feature =  new Feature({
  //     geometry: new Point(fromLonLat([latitude, longitude]))
  //   });

  //   let style: Style = new Style({
  //     image: new Icon({
  //       src: img_src,
  //       scale: 0.25,
  //     }),
  //     zIndex: 100,
  //   })

  //   feature.setStyle(style);
  //   feature.setId(id);

  //   return feature;
  // }

  return (
    <>
      <StyledMap id="map" style={{ width: "100%", height: "400px" }} />;
    </>
  );
}

export default MapComponent;
