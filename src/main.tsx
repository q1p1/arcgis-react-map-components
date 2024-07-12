import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// define the custom HTML elements from the Map Components
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

import "./index.css";

// What are the map components?
/* They are a collection of custom elements that let you compse HTML to build an application */

defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
