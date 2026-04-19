"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaWaveSquare } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { trackNavClick, trackCTA } from "@/lib/analytics";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Our Approach", href: "#strategy" },
  { name: "Performance", href: "#performance" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const resolveHref = (href: string) => {
    if (href.startsWith("#") && !isHome) return `/${href}`;
    return href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-lg border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            title="Binbot Investments"
            onClick={() => trackNavClick("Logo", "/")}
            className="flex items-center gap-3"
          >
            <FaWaveSquare className="w-8 h-8 text-primary" style={{ fontSize: "2rem" }} />
            <span className="font-display font-bold text-2xl tracking-wider text-foreground">
              BINBOT
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={resolveHref(link.href)}
                onClick={() => trackNavClick(link.name, link.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href={resolveHref("#contact")}
              onClick={() => trackCTA("Early Access", "navbar")}
              className="px-6 py-2.5 bg-[#f96332] text-white font-semibold uppercase tracking-wider text-sm rounded-none border border-[#f96332] hover:bg-transparent hover:text-[#f96332] transition-all duration-300"
            >
              Early Access
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden shadow-md"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={resolveHref(link.href)}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackNavClick(link.name, link.href);
                  }}
                  className="text-lg font-medium text-foreground hover:text-primary p-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resolveHref("#contact")}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  trackCTA("Early Access", "navbar_mobile");
                }}
                className="mt-4 px-6 py-3 text-center bg-[#f96332] text-white font-semibold uppercase tracking-wider rounded-none"
              >
                Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
