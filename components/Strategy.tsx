"use client";
import { motion } from "framer-motion";
import { Activity, GitMerge, ShieldAlert } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const strategies = [
  {
    icon: GitMerge,
    title: "Algorithmic Arbitrage",
    description:
      "Price differences for the same asset appear — and vanish — in milliseconds across exchanges. Our systems detect and exploit these gaps automatically, generating returns that are largely uncorrelated to the broader market.",
  },
  {
    icon: Activity,
    title: "ML Trend Following",
    description:
      "Our machine learning models continuously analyse market momentum and sentiment signals to identify high-probability trends early. Positions are sized dynamically based on confidence level — we press when conditions are right, and step back when they aren't.",
  },
  {
    icon: ShieldAlert,
    title: "Risk-Managed Long/Short",
    description:
      "We profit in both rising and falling markets. By holding long positions in assets we expect to gain, and short positions in those we expect to decline, we reduce directional risk while maintaining consistent exposure to alpha opportunities.",
  },
];

export function Strategy() {
  return (
    <section
      id="strategy"
      data-testid="strategy"
      className="py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Approach"
          title="How We Generate Returns"
          description="We don't rely on luck or a single bet. Binbot runs multiple independent strategies simultaneously, designed to find opportunity regardless of whether the market is going up, down, or sideways."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border p-8 sm:p-10 group hover:-translate-y-2 transition-all duration-500 hover:border-primary/50 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                  {strategy.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
