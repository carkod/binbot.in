import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmit, trackCTA } from "@/lib/analytics";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeUpdates, setSubscribeUpdates] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [phone, setPhone] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setIsSubmitting(true);
    trackFormSubmit("early_access");

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Received",
        description: "We'll be in touch when early access opens. Thank you!",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
      setSubscribeUpdates(false);
      setPhone(undefined);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block">
            Inquire
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Request Early Access
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Binbot is not yet publicly available. Register your interest now and
            be among the first to gain access when we launch.
          </p>
        </motion.div>

        {/* Main content: form + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border shadow-sm overflow-hidden">
          {/* Left: form panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card p-8 sm:p-10"
          >
            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-border">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 border border-border bg-background flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h5 className="text-sm text-foreground font-semibold mb-0.5">
                    Investor Relations
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    allocators@binbot.in
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 border border-border bg-background flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h5 className="text-sm text-foreground font-semibold mb-0.5">
                    Headquarters
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    London, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot — hidden from real users, bots will fill it */}
              <div
                style={{
                  position: "absolute",
                  left: "-9999px",
                  top: "-9999px",
                }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Full Name
                </label>
                <input
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  type="text"
                  placeholder="Jane Smith"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Email
                </label>
                <input
                  required
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  type="email"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Phone{" "}
                  <span className="normal-case font-normal text-muted-foreground">
                    (optional)
                  </span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="GB"
                  value={phone}
                  onChange={setPhone}
                  className="binbot-phone-input"
                />
              </div>

              {/* Organisation */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Organisation{" "}
                  <span className="normal-case font-normal text-muted-foreground">
                    (optional)
                  </span>
                </label>
                <input
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  type="text"
                  placeholder="Acme Corp"
                />
              </div>

              {/* Reason */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Reason for Using Binbot
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a reason…
                  </option>
                  <option value="retail">Retail</option>
                  <option value="institutional">Institutional</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Message{" "}
                  <span className="normal-case font-normal text-muted-foreground">
                    (optional)
                  </span>
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Anything you'd like us to know…"
                />
              </div>

              {/* Newsletter subscribe */}
              <div className="bg-primary/5 border border-primary/20 rounded-sm px-4 py-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 flex-shrink-0 accent-primary w-4 h-4 cursor-pointer"
                    checked={subscribeUpdates}
                    onChange={(e) => setSubscribeUpdates(e.target.checked)}
                  />
                  <div>
                    <span className="text-sm font-semibold text-foreground block mb-0.5">
                      Stay in the loop
                    </span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      We will only email you when Binbot launches. No spam,
                      ever.
                    </span>
                  </div>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => trackCTA("Request Early Access", "contact")}
                className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-[#f96332] text-white font-semibold uppercase tracking-wider text-sm rounded-none transition-all duration-300 hover:bg-[#e05427] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing…" : "Request Early Access"}
                {!isSubmitting && (
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>

              <p className="text-[11px] text-muted-foreground leading-relaxed text-center">
                By submitting you agree to our{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-primary underline hover:no-underline"
                >
                  Privacy Policy
                </a>
                . Your data will be processed by BINBOT LTD solely to manage
                this enquiry and early access registration.
              </p>
            </form>
          </motion.div>

          {/* Right: crypto background image — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative min-h-[600px] overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
              alt="Crypto market visualization"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay to blend with palette */}
            <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-primary/10 to-[#252422]/70" />
            {/* Decorative text overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <p className="text-white/80 font-display text-3xl font-bold leading-tight mb-3">
                A $3.5 trillion market,
                <br />
                working for you.
              </p>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                24/7 algorithmic trading across the most liquid digital asset
                pairs in the world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
