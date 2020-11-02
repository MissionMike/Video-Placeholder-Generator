/**
 * This is a sample analytics.js file. If you'd like to include your own analytics,
 * you can plug in your own tracking codes below, and copy/rename this file to "analytics.js"
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

/**
 * Set the "environment" variable for Sentry, and conditional loading of Google and LogRocket
 */
const environment = window && window.location.hostname.includes("localhost") ? "production" : "development";

Sentry.init({
  dsn: "https://your.sentry.io.url.here",
  integrations: [new Integrations.BrowserTracing()],
  environment: environment,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

/**
 * On production only, initialize LogRocket and Google Analytics
 */
if (environment === "production") {
  LogRocket.init("abcdef/your-logrocket-project-url");

  ReactGA.initialize("UA-0000000-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}
