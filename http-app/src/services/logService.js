import Raven from "raven-js";

function init() {
  Raven.config("https://48ed6a1f8e2a494c9924893a80e3f528@sentry.io/1416907", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
