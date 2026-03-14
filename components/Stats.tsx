"use client";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Assets",
    value: "1487+",
    detail: "being monitored in real time",
  },
  { label: "Daily Returns", value: "2.6%", detail: "Since Inception" },
  { label: "Sharpe Ratio", value: "2.1", detail: "Risk-Adjusted Alpha" },
  { label: "Years Active", value: "7+", detail: "Investing only in Cryptocurrency markets" },
];

export function Stats() {
  return (
    <section
      id="about"
      data-testid="stats"
      className="py-24 bg-card border-y border-border relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center py-6 md:py-0 px-4"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-foreground font-medium mb-1">{stat.label}</p>
              <p className="text-muted-foreground text-sm">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
