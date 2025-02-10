"use client";
import { PostHogProvider } from "posthog-js/react";
import { posthog } from "@/lib/posthog";

export function CSPostHogProvider({children}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
