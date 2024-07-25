import { ArcgisMap } from "@arcgis/map-components-react";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import "./App.css";

// If GeoJSON files are not on the same domain as your website, a CORS enabled server
// or a proxy is required.
const url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap
        basemap={"gray-vector"}
        onArcgisViewReadyChange={(event) => {
          const map: __esri.Map = event.target.map;
          const layer = new GeoJSONLayer({
            url,
          });
          map.add(layer);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
