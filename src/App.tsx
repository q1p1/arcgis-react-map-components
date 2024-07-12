import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";

import "./App.css";

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap
        center={[55, 25]}
        zoom={13}
        onArcgisViewReadyChange={(event) => {
          const map: __esri.Map = event.target.map;
          const graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

          const point = new Point({
            longitude: 55,
            latitude: 25,
          });

          const graphic = new Graphic({
            geometry: point,
          });

          graphicsLayer.add(graphic);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
