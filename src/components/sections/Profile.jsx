import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

const experience = [
  {
    role: "Freelance Practice",
    company: "Hanzo Co.",
    years: "2011 → Now",
  },
  {
    role: "Design Lead",
    company: "Google",
    years: "2024 → Now",
  },
  {
    role: "Senior Designer",
    company: "PayPal",
    years: "2019 → 2024",
  },
  {
    role: "Product Designer",
    company: "Meta",
    years: "2016 → 2019",
  },
];

const XIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className="w-5 h-5 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const slideDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { 
    duration: 0.8, 
    ease: [0.22, 1, 0.36, 1] 
  }
};

export function Profile() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-48 bg-transparent">
      <div className="container-width px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="w-12 md:w-16 h-px bg-linear-to-l from-black/30 to-transparent" />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#777] font-serif italic text-xl md:text-2xl"
            >
              About
            </motion.p>
            <div className="w-12 md:w-16 h-px bg-linear-to-r from-black/30 to-transparent" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-balance">
            Pushing boundaries <span className="text-[#a0a0a0]">since 2011</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left: Image Column (Compact 35% width) */}
          <div className="w-full lg:w-[35%] shrink-0">
            <div
              className="relative aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[4px] md:border-[6px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] bg-[#f5f5f5] lg:-rotate-1"
            >
              <img
                src="https://framerusercontent.com/images/kE0M3vK0f0S1V0V1V0V1V0V1.png" 
                alt="Joris van Dijk"
                className="w-full h-full object-cover grayscale"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            <motion.div 
              {...slideDown}
              transition={{ ...slideDown.transition, delay: 0.2 }}
              className="mt-6 md:mt-8 flex justify-between items-end"
            >
              <div className="flex gap-4 md:gap-5 text-[#888]">
                <a href="#" className="hover:text-black transition-colors"><Instagram className="w-4 h-4 md:w-4.5 md:h-4.5" /></a>
                <a href="#" className="hover:text-black transition-colors"><Linkedin className="w-4 h-4 md:w-4.5 md:h-4.5" /></a>
                <a href="#" className="hover:text-black transition-colors"><XIcon /></a>
              </div>
              <div className="text-right">
                <h3 className="font-bold text-base md:text-lg text-black leading-tight">Joris van Dijk</h3>
                <p className="text-[#888] text-xs md:text-sm font-medium">Hanzo Studio, Founder</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Content Column (Takes remaining space) */}
          <div className="flex-1 pt-0 lg:pt-2">
            <div className="mb-10 md:mb-14 relative">
              {/* Smiley Icon */}
              <div className="absolute -top-8 -right-0 md:-top-10 md:-right-2 w-4 h-4 md:w-5 md:h-5 text-[#FF5500]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h2c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm8-1c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1zm-3 8c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <p className="text-base md:text-xl text-[#555] leading-relaxed font-medium max-w-2xl">
                Joris van Dijk is a Dutch designer known for his minimalist, expressive digital work. He helps startups and studios create clean interfaces and strong branding. Based in Utrecht, he blends function with emotion — and often spends his free time cycling or exploring generative art.
              </p>
            </div>

            {/* Experience Table */}
            <div className="space-y-0 border-l border-black/10 pl-6 md:pl-12">
              {experience.map((item, i) => (
                <motion.div
                  key={item.role + item.company}
                  {...slideDown}
                  transition={{ ...slideDown.transition, delay: 0.4 + i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-3 py-4 md:py-6 border-b border-black/5 items-start md:items-center last:border-0 group hover:bg-black/[0.02] transition-colors -ml-6 md:-ml-12 pl-6 md:pl-12"
                >
                  <span className="font-bold text-black text-[10px] md:text-sm uppercase tracking-tight mb-1 md:mb-0">{item.role}</span>
                  <span className="text-[#888] font-medium text-sm md:text-base mb-1 md:mb-0">{item.company}</span>
                  <span className="text-[#888] font-medium text-xs md:text-base md:text-right">{item.years}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}