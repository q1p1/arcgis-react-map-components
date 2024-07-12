import { ArcgisMap } from "@arcgis/map-components-react";
import "./App.css";

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap center={[55, 25]} zoom={13}></ArcgisMap>
    </div>
  );
}

export default App;
