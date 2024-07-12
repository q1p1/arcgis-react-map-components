import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Polyline from "@arcgis/core/geometry/Polyline";

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

          const polyline = new Polyline({
            paths: [
              [
                [54.98131842104888, 25.018558205934426],
                [54.9914613580155, 25.002272706109935],
              ],
            ],
          });

          const graphic = new Graphic({
            geometry: polyline,
          });

          graphicsLayer.add(graphic);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
