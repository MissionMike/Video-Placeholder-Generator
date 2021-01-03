/**
 * If you'd like to include your own analytics,
 * you can plug in your own tracking codes into .env for use below.
 *
 * The following dependencies are included in package.json; please remove any that you don't
 * want to use:
 *
 * react-ga https://www.npmjs.com/package/react-ga
 * @sentry/react https://www.npmjs.com/package/@sentry/react
 * @sentry/tracing https://www.npmjs.com/package/@sentry/tracing
 * logrocket https://www.npmjs.com/package/logrocket
 */
import ReactGA from "react-ga";
import LogRocket from "logrocket";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

require("dotenv").config();

/**
 * Set the "environment" variable for Sentry, and conditional loading of Google and LogRocket
 */
const environment = window && window.location.hostname.includes("localhost") ? "production" : "development";

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    environment: environment,
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

/**
 * On production only, initialize LogRocket and Google Analytics
 */
if (environment === "production") {
  if (process.env.LOGROCKET_PROJECT) {
    LogRocket.init(process.env.LOGROCKET_PROJECT);
  }
  if (process.env.GA_TRACKING) {
    ReactGA.initialize(process.env.GA_TRACKING);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}
