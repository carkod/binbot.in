import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const assets = [
  {
    pair: "BTC/USDT",
    name: "Bitcoin",
    strategy: "Trend Following",
    return: "+38.4%",
    status: "ACTIVE",
  },
  {
    pair: "ETH/USDT",
    name: "Ethereum",
    strategy: "Arbitrage",
    return: "+22.1%",
    status: "ACTIVE",
  },
  {
    pair: "SOL/USDT",
    name: "Solana",
    strategy: "Trend Following",
    return: "+51.3%",
    status: "ACTIVE",
  },
  {
    pair: "BNB/USDT",
    name: "BNB",
    strategy: "Long/Short",
    return: "+17.6%",
    status: "COMPLETED",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Portfolio"
          title="Real-Time Positions"
          description="A snapshot of assets currently under active management. Every position is algorithmically monitored, risk-screened, and adjusted in real time."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {assets.map((asset, index) => (
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
              {/* Card Body */}
              <div className="px-5 py-5">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {asset.pair}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {asset.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-bold text-[#6bd098]">
                      {asset.return}
                    </span>
                    <span
                      className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-sm uppercase ${
                        asset.status === "ACTIVE"
                          ? "bg-[#6bd098]/20 text-[#6bd098]"
                          : "bg-[#51cbce]/20 text-[#51cbce]"
                      }`}
                    >
                      {asset.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-t border-border pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Strategy</span>
                    <span className="text-foreground font-medium">
                      {asset.strategy}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Trailing profit
                    </span>
                    <span className="text-foreground font-medium">1.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Stop loss</span>
                    <span className="text-foreground font-medium">3%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
