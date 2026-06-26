"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastPathname = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double tracking on render if pathname didn't change
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;

    // Do not track admin path pageviews to avoid inflating stats with admin's own views
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return;
    }

    const trackPageView = async () => {
      try {
        const consent = localStorage.getItem("cookie-consent");
        let visitorId = "anonymous";

        if (consent === "accepted") {
          // Consent accepted: use persistent local storage ID
          let id = localStorage.getItem("ryker_visitor_id");
          if (!id) {
            id = "vis_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem("ryker_visitor_id", id);
          }
          visitorId = id;
        } else if (consent === "declined") {
          // Consent explicitly declined: fully anonymous one-off tracking
          visitorId = "anon_" + Math.random().toString(36).substring(2, 8);
        } else {
          // Consent not decided yet: use session-based temporary ID
          try {
            let id = sessionStorage.getItem("ryker_session_visitor_id");
            if (!id) {
              id = "sess_" + Math.random().toString(36).substring(2, 15);
              sessionStorage.setItem("ryker_session_visitor_id", id);
            }
            visitorId = id;
          } catch {
            visitorId = "anon_" + Math.random().toString(36).substring(2, 8);
          }
        }

        // Determine if this is a new session
        let isNewSession = false;
        try {
          if (!sessionStorage.getItem("ryker_session_active")) {
            sessionStorage.setItem("ryker_session_active", "true");
            isNewSession = true;
          }
        } catch {
          isNewSession = true;
        }

        const referrer = document.referrer || "direct";

        // Call our track API
        await fetch("/api/analytics/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: pathname,
            visitorId,
            referrer,
            isNewSession,
          }),
        });
      } catch (err) {
        console.warn("Analytics error:", err);
      }
    };

    // Delay slightly to allow page title and metadata to load
    const timer = setTimeout(trackPageView, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
