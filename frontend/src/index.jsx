import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import posthog from 'posthog-js';
import "./index.css";
import App from "./App";

// Initialize PostHog
if (import.meta.env.MODE === 'production') {
  const initPostHog = () => {
    posthog.init('phc_yJW1VjHGGwmCbbrtczfqqNxgBDbhlhOWcdzcIJEOTFE', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_performance: true,
      persistence: 'localStorage',
      autocapture: false,
    });
  };

  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => initPostHog());
  } else {
    setTimeout(initPostHog, 3000);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
