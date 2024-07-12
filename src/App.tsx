import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Polygon from "@arcgis/core/geometry/Polygon.js";

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

          const polygon = new Polygon({
            rings: [
              [
                [54.99419933369407, 25.000951751182384],
                [54.989537624618634, 24.99908490366272],
                [54.99994539453914, 24.98100403595454],
                [55.005582578844354, 24.983363071888363],
                [54.99419933369407, 25.000951751182384],
              ],
            ],
          });

          const graphic = new Graphic({
            geometry: polygon,
          });

          graphicsLayer.add(graphic);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
