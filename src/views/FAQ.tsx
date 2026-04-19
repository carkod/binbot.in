"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "Why doesn't Binbot invest in larger cryptos like Bitcoin or Ethereum?",
    answer: `With a focused pool of capital, we deliberately target small-cap assets rather than the major coins — and that's a strategic choice, not a limitation.

Small-caps are significantly more volatile than Bitcoin or Ethereum, which means they carry more risk but also far greater upside potential. Our edge lies in identifying and systematically managing that risk: we cap our losses early with a defensive exit strategy, and we let our winners run. In that environment, smaller position sizes can generate outsized returns in ways that large-cap trading simply cannot.

There's also a structural reason to avoid the majors. Assets like Bitcoin are heavily influenced by institutional players — investment banks, macro funds, and large proprietary trading desks — whose capital dwarfs anything we would deploy. Competing in that arena means fighting against participants with information advantages, direct market access, and the ability to move markets themselves. We prefer to operate where those players aren't looking.`,
  },
  {
    question: "Why don't you use backtesting?",
    answer: `Most of the small-cap assets we trade have little to no meaningful price history, which makes traditional backtesting statistically unreliable. A strategy that looks impressive on a chart with six months of data is largely noise.

Instead, we use paper trading — running our algorithms against live market conditions without real capital at risk. We forward-test each strategy against a basket of comparable assets: coins that share the same characteristics, whether that's category (meme, DeFi, gaming), chain, or broader ecosystem behaviour.

This gives us a far more accurate picture of how a strategy will actually perform when deployed, rather than how it would have performed in a market that no longer exists.`,
  },
  {
    question: "Why don't you optimise for raw returns?",
    answer: `We use the word "returns" when communicating with customers because it's the most intuitive metric — but internally, our algorithms are measured entirely differently. We optimise for alpha: consistently outperforming the market, regardless of how much capital we're managing.

This distinction matters more than it might seem. Many traditional fund managers earn primarily through fees tied to assets under management, which incentivises raising ever-larger pools of capital rather than generating genuine performance. In the worst cases, payouts to existing customers come not from trading profits but from fresh inflows — a structure that looks sustainable until it isn't.

At Binbot, our bots are judged by how they perform relative to market movements, not by the volume of capital they move. We would rather run a lean, genuinely alpha-generating operation than scale for its own sake. Your returns come from the market — not from someone else's deposit.`,
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0];
  index: number;
}) {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className="font-display font-semibold text-foreground text-base md:text-lg leading-snug group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-5">
              {faq.answer.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`text-muted-foreground leading-relaxed text-sm md:text-base ${i > 0 ? "mt-4" : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navbar />

      {/* Hero */}
      <div className="bg-card border-b border-border py-24 px-4 pt-36">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block"
          >
            Transparency First
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Honest answers to the questions serious investors ask before committing capital.
          </motion.p>
        </div>
      </div>

      {/* FAQ list */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-border bg-card p-8 text-center"
        >
          <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display font-bold text-xl text-foreground mb-2">
            Still have questions?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            We&apos;re happy to discuss your specific situation. Reach out and someone from the team will respond personally.
          </p>
          <a
            href="mailto:allocators@binbot.in"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
          >
            Contact the Team
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
