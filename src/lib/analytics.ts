declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params ?? {});
  }
}

export function trackLinkClick(label: string, destination: string) {
  trackEvent("link_click", {
    link_text: label,
    link_url: destination,
  });
}

export function trackNavClick(label: string, href: string) {
  trackEvent("navigation_click", {
    nav_item: label,
    destination: href,
  });
}

export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", {
    form_name: formName,
  });
}

export function trackCTA(ctaLabel: string, section: string) {
  trackEvent("cta_click", {
    cta_label: ctaLabel,
    section,
  });
}
