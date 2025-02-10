// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://48e0330aa862bffa31db1a2b586ff9be@o4508790427222016.ingest.us.sentry.io/4508790428532736",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  
  enabled: process.env.NODE_ENV === "production",
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
