import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Script from "next/script";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL("https://binbot.in"),
  title: {
    default: "Binbot — Algorithmic Crypto Hedge Fund",
    template: "%s | Binbot",
  },
  description:
    "Binbot deploys systematic trading algorithms driven by heavy technical analysis and big data sentiment signals, generating uncorrelated, risk-adjusted returns across global cryptocurrency markets.",
  keywords: [
    "crypto hedge fund",
    "algorithmic trading",
    "cryptocurrency fund",
    "digital assets",
    "systematic trading",
    "bitcoin hedge",
    "crypto alpha",
    "quantitative trading",
    "binbot",
  ],
  authors: [{ name: "BINBOT LTD" }],
  creator: "BINBOT LTD",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://binbot.in",
    siteName: "Binbot",
    title: "Binbot — Algorithmic Crypto Hedge Fund",
    description:
      "Systematic algorithms and big data sentiment signals generating uncorrelated, risk-adjusted returns across a $3.5 trillion crypto market.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Binbot — Algorithmic Crypto Hedge Fund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binbot — Algorithmic Crypto Hedge Fund",
    description:
      "Systematic algorithms and big data sentiment signals generating uncorrelated, risk-adjusted returns across a $3.5 trillion crypto market.",
    images: ["/opengraph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "BINBOT LTD",
  url: "https://binbot.in",
  description:
    "Algorithmic cryptocurrency hedge fund deploying systematic trading strategies across global digital asset markets.",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  email: "allocators@binbot.in",
  sameAs: ["https://binbot.in"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Toaster />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: true });
          `}
        </Script>
      </body>
    </html>
  );
}
