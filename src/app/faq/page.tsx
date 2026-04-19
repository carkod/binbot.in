import type { Metadata } from "next";
import FAQ from "@/views/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Honest answers to the questions serious investors ask before committing capital — from backtesting methodology to how Binbot measures performance.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return <FAQ />;
}
