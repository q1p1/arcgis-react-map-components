import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { ArcgisMap } from "@arcgis/map-components-react";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FieldsContent from "@arcgis/core/popup/content/FieldsContent";
import FieldInfo from "@arcgis/core/popup/FieldInfo";

import "./App.css";

const typeFieldInfo = new FieldInfo({
  fieldName: "type",
  label: "Type",
});

const magnitudeFieldInfo = new FieldInfo({
  fieldName: "mag",
  label: "Magnitude",
});

const fieldsContent = new FieldsContent({
  fieldInfos: [typeFieldInfo, magnitudeFieldInfo],
});

const template = new PopupTemplate({
  title: "{type} - {mag}",
  content: [fieldsContent],
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
          });

          map.add(geoJSONLayer);
        }}
      ></ArcgisMap>
    </div>
  );
}

export default App;
