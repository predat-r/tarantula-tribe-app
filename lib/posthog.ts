"use client";
import posthog from "posthog-js";

declare global {
  interface Window {
    __POSTHOG_INITIALIZED__?: boolean;
  }
}

if (typeof window !== "undefined" && !window.__POSTHOG_INITIALIZED__) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
    person_profiles: "identified_only",
  });
  window.__POSTHOG_INITIALIZED__ = true; 
}

export { posthog };