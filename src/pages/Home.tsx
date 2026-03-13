import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CryptoTicker } from "@/components/CryptoTicker";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Strategy } from "@/components/Strategy";
import { Performance } from "@/components/Performance";
import { Portfolio } from "@/components/Portfolio";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [tickerLoaded, setTickerLoaded] = useState(false);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <CryptoTicker onLoaded={() => setTickerLoaded(true)} />
      <main className={tickerLoaded ? "pt-[116px]" : "pt-20"}>
        <Hero />
        <Stats />
        <Strategy />
        <Performance />
        <Portfolio />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
