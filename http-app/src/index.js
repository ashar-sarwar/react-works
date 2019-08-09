import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
//import Raven from "raven-js";
import "bootstrap/dist/css/bootstrap.css";
import logger from "./services/logService";

// Raven.config("https://48ed6a1f8e2a494c9924893a80e3f528@sentry.io/1416907", {
//   release: "1-0-0",
//   environment: "development-test"
// }).install();
logger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
