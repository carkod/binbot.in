"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import type { Bot } from "@/lib/bots";

function formatPair(pair: string, quoteAsset: string): string {
  const base = pair
    .replace("USDTM", "")
    .replace("USDCM", "")
    .replace("BUSDM", "");
  return `${base}/${quoteAsset}`;
}

function formatStrategy(strategy: string): string {
  if (strategy === "margin_short") return "Short";
  if (strategy === "long") return "Long";
  return strategy.replace(/_/g, " ");
}

function formatCloseCondition(condition: string): string {
  return condition.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Portfolio({ bots = [] }: { bots?: Bot[] }) {
  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Portfolio"
          title="Real-Time Positions"
          description="A live snapshot of assets recently managed by our algorithms. Every position is monitored, risk-screened, and adjusted in real time."
        />

        {bots.length === 0 && (
          <p className="text-center text-muted-foreground mt-12 text-sm">
            No positions available at this time.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {bots.map((bot, index) => {
            const symbol = formatPair(bot.pair, bot.quote_asset);
            const direction = bot.position ?? bot.strategy ?? "long";
            const profit = bot.trailing_profit ?? bot.trailling_profit ?? 0;
            const isLong = direction === "long";
            const strategyLabel = formatStrategy(direction);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="px-5 py-5">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {symbol}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">
                        {bot.market_type}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-sm font-bold ${isLong ? "text-[#6bd098]" : "text-[#51cbce]"}`}
                      >
                        +{profit}%
                      </span>
                      <span
                        className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-sm uppercase ${
                          bot.status === "active"
                            ? "bg-[#6bd098]/20 text-[#6bd098]"
                            : "bg-border text-muted-foreground"
                        }`}
                      >
                        {bot.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-border pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Strategy</span>
                      <span
                        className={`font-medium ${isLong ? "text-[#6bd098]" : "text-[#51cbce]"}`}
                      >
                        {strategyLabel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exit mode</span>
                      <span className="text-foreground font-medium">
                        {formatCloseCondition(bot.close_condition)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stop loss</span>
                      <span className="text-foreground font-medium">
                        {bot.stop_loss}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Opened</span>
                      <span className="text-foreground font-medium text-xs">
                        {formatDate(
                          bot.deal.opening_timestamp || bot.created_at,
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
