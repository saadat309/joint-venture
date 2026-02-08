import { motion } from "framer-motion";

const reviews = [
  {
    text: "GlamRev AI completely revolutionized our brand's visual storytelling. The cinematic AI films they produced were not only hyper-realistic but captured our brand's soul with incredible precision.",
    author: "Sarah Jenkins",
    role: "CEO at Nexus Media",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    text: "The speed and quality of their AI-driven design and automation workflows are unmatched. They helped us scale our startup's digital presence in weeks, not months. A total game-changer for us.",
    author: "Marcus Chen",
    role: "Founder of Skywise Tech",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

const BlurText = ({ text, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + (wordIndex * 0.05) + (charIndex * 0.01),
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export function Reviews() {
  return (
    <section className="relative overflow-hidden pt-0 pb-24 md:pb-32 lg:pb-48 bg-transparent">
      <div className="container-width relative px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 lg:gap-0 relative">
          
          {/* Central Vertical Divider - Height synced to content */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border hidden lg:block" />

          {/* Left Review - Pushed down from top */}
          <div className="relative flex flex-col items-start lg:pr-24 lg:pt-12 lg:pb-32">
            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
              {/* Quote Mark */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 md:-right-12 top-0 text-4xl md:text-5xl font-serif font-bold text-foreground pointer-events-none"
              >
                "
              </motion.div>
              
              <blockquote className="text-lg md:text-xl lg:text-[22px] leading-[1.6] text-foreground font-medium mb-8 md:mb-10">
                <BlurText text={reviews[0].text} delay={0.2} />
              </blockquote>

              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-muted shrink-0 border-2 border-background shadow-sm">
                  <img
                    src={reviews[0].avatar}
                    alt={reviews[0].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-sm md:text-base leading-tight">
                    {reviews[0].author}
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm font-medium">
                    {reviews[0].role}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Review - Pushed up from bottom */}
          <div className="relative flex flex-col items-start lg:items-end justify-end lg:pl-24 lg:pt-32 lg:pb-12">
            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
               {/* Quote Mark */}
               <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 md:-right-12 top-0 text-4xl md:text-5xl font-serif font-bold text-foreground pointer-events-none"
              >
                "
              </motion.div>

              <blockquote className="text-lg md:text-xl lg:text-[22px] leading-[1.6] text-foreground font-medium mb-8 md:mb-10">
                <BlurText text={reviews[1].text} delay={0.4} />
              </blockquote>

              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-muted shrink-0 border-2 border-background shadow-sm">
                  <img
                    src={reviews[1].avatar}
                    alt={reviews[1].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-sm md:text-base leading-tight">
                    {reviews[1].author}
                  </span>
                  <span className="text-muted-foreground text-xs md:text-sm font-medium">
                    {reviews[1].role}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
