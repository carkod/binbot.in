import type { Metadata } from "next";
import TermsOfService from "@/views/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the BINBOT LTD Terms of Service governing use of the Binbot website and early access registration.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: false },
};

export default function Page() {
  return <TermsOfService />;
}
