"use client";
import { motion } from "framer-motion";
import { LogIn, Wallet, TrendingUp, Banknote, AlertTriangle, BadgeCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: LogIn,
    title: "Sign In",
    description: "Create and verify your account in minutes.",
    color: "#51cbce",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Deposit",
    description: "Fund your account with the amount you want to invest.",
    color: "#51cbce",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch It Grow",
    description: "Our algorithms trade around the clock on your behalf.",
    color: "#6bd098",
  },
  {
    number: "04",
    icon: Banknote,
    title: "Withdraw",
    description: "Cash out anytime, or let your returns keep compounding.",
    color: "#6bd098",
  },
];

const disclaimers = [
  {
    icon: AlertTriangle,
    text: "Cryptocurrency markets are inherently volatile. Investors should expect fluctuations in their balance from month to month, including periods of loss.",
  },
  {
    icon: BadgeCheck,
    text: "Binbot targets and guarantees a minimum annualised net return of 12% per year under normal market conditions. Past performance is not indicative of future results.",
  },
];

function HorizontalArrow({ delay }: { delay: number }) {
  return (
    <div className="hidden lg:flex flex-shrink-0 items-center self-center px-1">
      <svg width="72" height="28" viewBox="0 0 72 28" fill="none">
        <motion.path
          d="M0 14 L56 14"
          stroke="#51cbce"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay, duration: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 7 L64 14 L50 21"
          stroke="#51cbce"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: delay + 0.48, duration: 0.15 }}
        />
      </svg>
    </div>
  );
}

function VerticalArrow({ delay }: { delay: number }) {
  return (
    <div className="lg:hidden flex justify-center flex-shrink-0 my-1">
      <svg width="28" height="48" viewBox="0 0 28 48" fill="none">
        <motion.path
          d="M14 0 L14 36"
          stroke="#51cbce"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay, duration: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M7 30 L14 44 L21 30"
          stroke="#51cbce"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: delay + 0.38, duration: 0.15 }}
        />
      </svg>
    </div>
  );
}

function StepNode({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.18, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center bg-card border border-border rounded-2xl px-6 py-8 shadow-sm flex-1 min-w-[160px] max-w-[220px] mx-auto lg:mx-0"
    >
      {/* Step number */}
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background border border-border rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest text-muted-foreground">
        {step.number}
      </span>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mt-2"
        style={{ backgroundColor: `${step.color}18`, border: `1.5px solid ${step.color}40` }}
      >
        <Icon className="w-6 h-6" style={{ color: step.color }} />
      </div>

      {/* Text */}
      <h3 className="font-display font-semibold text-foreground text-base mb-1.5 leading-snug">
        {step.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-card border-y border-border">
      <div className="py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block">
              Getting Started
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Go from sign-up to earning in four steps — no trading experience required.
            </p>
          </motion.div>

          {/* Flowchart — desktop: row, mobile: column */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                <StepNode step={step} index={i} />
                {i < steps.length - 1 && (
                  <>
                    <HorizontalArrow delay={i * 0.18 + 0.4} />
                    <VerticalArrow delay={i * 0.18 + 0.4} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer band */}
      <div className="border-t border-border bg-background/60 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-5">
          {disclaimers.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-3 flex-1">
                <Icon className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
