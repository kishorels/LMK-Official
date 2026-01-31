import React from "react";
import ReactDOM from "react-dom/client";
import posthog from 'posthog-js';
import "./index.css";
import App from "./App";

// Initialize PostHog
if (process.env.NODE_ENV === 'production') {
  posthog.init('phc_yJW1VjHGGwmCbbrtczfqqNxgBDbhlhOWcdzcIJEOTFE', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    capture_performance: true,
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
