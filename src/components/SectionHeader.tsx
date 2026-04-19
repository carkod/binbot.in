"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block">
          {subtitle}
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          {title}
        </h2>
        {description && (
          <p
            className={`text-muted-foreground max-w-2xl text-lg ${align === "center" ? "mx-auto" : ""}`}
          >
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
