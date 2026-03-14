"use client";
import { motion } from "framer-motion";
import { Coins, ShieldCheck, Bot, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  {
    icon: Coins,
    title: "Crypto Exposure Without the Complexity",
    description:
      "Many cryptocurrencies can't be purchased directly with traditional currency — Binbot acts as your bridge. Gain exposure to a diversified crypto portfolio without ever managing wallets, private keys, or navigating complex exchanges yourself.",
  },
  {
    icon: ShieldCheck,
    title: "We Do the Research. You Skip the Risk.",
    description:
      "The crypto market is flooded with speculative tokens and outright scams. We rigorously screen every asset before any capital is deployed, filtering out projects that don't meet our standards. Our customers never need to research coins or worry about getting burned by bad actors.",
  },
  {
    icon: Bot,
    title: "Fully Algorithmic. Always On.",
    description:
      "Emotions are the enemy of good trading. Our systems are 100% automated — no fear, no greed, no hesitation. Crypto markets run 24 hours a day, 7 days a week, and so do our bots. While you sleep, Binbot is executing trades with precision.",
  },
  {
    icon: TrendingUp,
    title: "Returns That Outpace Traditional Investments",
    description:
      "The average mutual fund or pension plan delivers modest, single-digit annual returns. Binbot gives you access to a $3.5 trillion market, which is still untapped by giant investment banks — professionally managed and risk-adjusted.",
  },
];

export function Features() {
  return (
    <section
      data-testid="features"
      className="py-32 bg-card border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="The Edge"
          title="Why Binbot"
          description="We built Binbot from the ground up to give everyday investors access to the kind of systematic crypto investing previously reserved for institutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center bg-background shadow-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
