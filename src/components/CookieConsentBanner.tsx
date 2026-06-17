"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type ConsentStatus = "accepted" | "rejected" | "pending";

const CONSENT_STORAGE_KEY = "binbot_cookie_consent";

function clearAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  const hostParts = window.location.hostname.split(".");
  const parentDomain =
    hostParts.length > 2 ? `.${hostParts.slice(-2).join(".")}` : undefined;

  cookieNames.forEach((name) => {
    document.cookie = `${name}=; path=/; max-age=0`;
    if (parentDomain) {
      document.cookie = `${name}=; path=/; domain=${parentDomain}; max-age=0`;
    }
  });
}

export function CookieConsentBanner() {
  const [status, setStatus] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    try {
      const storedStatus = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      setStatus(
        storedStatus === "accepted" || storedStatus === "rejected"
          ? storedStatus
          : "pending",
      );
    } catch {
      setStatus("pending");
    }
  }, []);

  const rememberConsent = (nextStatus: ConsentStatus) => {
    setStatus(nextStatus);

    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, nextStatus);
    } catch {
      // Browsers can block storage; keep the in-memory choice for this visit.
    }
  };

  const rejectAnalytics = () => {
    rememberConsent("rejected");
    clearAnalyticsCookies();
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId || status === null) return null;

  return (
    <>
      {status === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: true });
            `}
          </Script>
        </>
      )}

      {status === "pending" && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card/95 backdrop-blur-md shadow-[0_-12px_30px_rgba(0,0,0,0.08)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Cookie Preferences
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                We use Google Analytics cookies to understand site traffic and
                improve Binbot. You can accept analytics cookies or continue
                without them.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
              <a
                href="/privacy"
                className="inline-flex min-h-11 items-center justify-center border border-border px-5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Privacy Policy
              </a>
              <button
                type="button"
                onClick={rejectAnalytics}
                className="inline-flex min-h-11 items-center justify-center border border-border px-5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => rememberConsent("accepted")}
                className="inline-flex min-h-11 items-center justify-center border border-[#f96332] bg-[#f96332] px-5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#e05427]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
