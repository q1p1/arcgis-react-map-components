import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import "./App.css";

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap
        basemap={"gray-vector"}
        onArcgisViewReadyChange={(event) => {
          const map = event.target.map as __esri.Map;

          const geoJSONLayer = new GeoJSONLayer({
            url: "http://localhost:3001/earthquakes",
          });

          map.add(geoJSONLayer);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
