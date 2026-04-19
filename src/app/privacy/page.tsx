import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the BINBOT LTD Privacy Policy to understand how we collect, use and protect your personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: false },
};

export default function Page() {
  return <PrivacyPolicy />;
}
