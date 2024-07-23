import { ArcgisMap } from "@arcgis/map-components-react";
import "./App.css";

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap basemap={"gray-vector"}></ArcgisMap>
    </div>
  );
}

export default App;
