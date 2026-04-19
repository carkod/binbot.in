"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const team = [
  {
    name: "Alexander Vance",
    role: "Chief Executive Officer",
    image: "ceo.png",
    bio: "Former Managing Director at a Tier-1 proprietary trading firm. 15 years experience in high-frequency algorithmic systems."
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    image: "cto.png",
    bio: "PhD in Computer Science from MIT. Architected the core low-latency matching engines used by top global exchanges."
  },
  {
    name: "Marcus Chen",
    role: "Head of Quantitative Strategies",
    image: "quant.png",
    bio: "Pioneered novel statistical arbitrage models for digital assets. Previously Head of Crypto at a major macro hedge fund."
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          subtitle="Leadership" 
          title="World-Class Expertise" 
          description="A rare convergence of traditional finance pedigree and deep crypto-native engineering talent."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] border border-border">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={`/images/${member.image}`} 
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
