import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

import "./App.css";

const template = new PopupTemplate({
  title: "{type} - {mag}",
  content: "type: {type} - Magnitude: {mag}",
});

const simpleMarkerSymbol = new SimpleMarkerSymbol({ color: "green" });

const simpleRenderer = new SimpleRenderer({
  symbol: simpleMarkerSymbol,
});

function App() {
  return (
    <div className="mapDiv">
      <ArcgisMap
        basemap={"gray-vector"}
        onArcgisViewReadyChange={(event) => {
          const map = event.target.map as __esri.Map;

          const geoJSONLayer = new GeoJSONLayer({
            url: "http://localhost:3001/earthquakes",
            popupTemplate: template,
            renderer: simpleRenderer,
          });

          map.add(geoJSONLayer);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
