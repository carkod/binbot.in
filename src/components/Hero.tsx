"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { trackCTA } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Finance Background"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#6bd098" }}></span>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Cryptocurrency Trading
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#252422] leading-[1.1] mb-8">
              Algorithmic <br />
              <span className="text-primary">Alpha</span> in <br />
              Digital Assets
            </h1>
            
            <p className="text-lg md:text-xl text-foreground font-light max-w-2xl mb-10 leading-relaxed">
              Binbot is 100% focused on cryptocurrency — running systematic algorithms across the full spectrum of digital assets to maximise profitability while actively hedging against volatility. We favour low-cap assets where the greatest growth potential lies, using Bitcoin as a market reference rather than a constraint. Our mission is to offer a credible, professionally managed alternative to a market that has long been out of reach for most investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={() => trackCTA("Schedule a Call", "hero")}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold uppercase tracking-wider text-sm rounded-none transition-all duration-300 hover:bg-[#3ab5b8]"
              >
                Schedule a Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#strategy"
                onClick={() => trackCTA("View Strategy", "hero")}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#66615b] font-semibold uppercase tracking-wider text-sm rounded-none border border-[#e3e3e3] hover:border-primary hover:text-primary transition-all duration-300"
              >
                View Strategy
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
