"use client";
import { motion } from "framer-motion";
import { Activity, GitMerge, ShieldAlert } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const strategies = [
  {
    icon: GitMerge,
    title: "Algorithmic Trading",
    description:
      "We analyze thousands of data points every millisecond — price action, order book depth, volatility, and more — to identify optimal entry and exit points. Our algorithms are designed to adapt to changing market conditions, ensuring we capture opportunities while managing risk effectively.",
  },
  {
    icon: Activity,
    title: "Small tokens, Big Opportunities",
    description:
      "The crypto market is full of hidden gems that can deliver outsized returns. While other funds focus on large-cap coins, we deploy capital across a wide range of assets, including smaller tokens that have strong technical setups and low correlation to Bitcoin. This diversification allows us to capture alpha that others miss.",
  },
  {
    icon: ShieldAlert,
    title: "Risk-Managed",
    description:
      "We profit in both rising and falling markets. By holding long positions and short positions in multiple markets, we reduce directional risk while maintaining consistent exposure to alpha opportunities.",
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
