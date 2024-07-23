import { ArcgisMap } from "@arcgis/map-components-react";
import "./App.css";

// If GeoJSON files are not on the same domain as your website, a CORS enabled server
// or a proxy is required.
const url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap basemap={"gray-vector"}></ArcgisMap>
    </div>
  );
}

export default App;
