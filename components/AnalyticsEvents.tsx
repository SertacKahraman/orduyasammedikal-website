"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

function getEventName(href: string): string | null {
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("wa.me/")) return "whatsapp_click";
  if (href.includes("google.com/maps")) return "directions_click";
  return null;
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");

      if (!(anchor instanceof HTMLAnchorElement)) return;

      const eventName = getEventName(anchor.href);

      if (!eventName) return;

      sendGAEvent("event", eventName, {
        link_url: anchor.href,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
