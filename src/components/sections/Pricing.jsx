import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Smartphone, LayoutGrid, Zap, Search, Monitor, Target, FileText, Heart, Globe } from "lucide-react";

const monthlyData = {
  price: "$7,500",
  features: [
    "Unlimited design requests",
    "Fast turnaround",
    "Fixed monthly rate",
    "Async communication",
    "Flexible scope",
    "Pause anytime",
  ],
  review: {
    text: "Astrid's minimalist design approach transformed our brand. The simplicity and clarity she brought to our identity made us stand out in a crowded market. Our customers immediately noticed the difference.",
    author: "Helena Moreau",
    role: "Creative Director at Studio Novo",
    avatar: "https://i.pravatar.cc/150?u=helena"
  }
};

const customData = {
  price: "$1,500",
  features: [
    "One-off project focus",
    "Dedicated design sprint",
    "Direct Slack access",
    "Strategy & consulting",
    "Priority support",
    "Custom deliverables",
  ],
  review: {
    text: "The custom project was exactly what we needed for our launch. Joris integrated perfectly with our engineering team, delivering high-fidelity prototypes that saved us weeks of development.",
    author: "Milan Bakker",
    role: "Founder of Drifted Studio",
    avatar: "https://i.pravatar.cc/150?u=milan"
  }
};

const gridItems = [
  { icon: Smartphone, text: "Senior-level quality" },
  { icon: LayoutGrid, text: "Systems thinking" },
  { icon: Zap, text: "Developer-friendly" },
  { icon: Search, text: "Clear process" },
  { icon: Monitor, text: "On-brand, every time" },
  { icon: Target, text: "Reliable partner" },
  { icon: FileText, text: "Fast execution" },
  { icon: Heart, text: "Thoughtful feedback" },
  { icon: Globe, text: "Smooth handoff" },
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
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
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

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [hasToggled, setHasToggled] = useState(false);
  const data = isMonthly ? monthlyData : customData;

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
    setHasToggled(true);
  };

  return (
    <section id="pricing" className="section-padding bg-transparent py-12 lg:py-16">
      <div className="container-width text-center mb-16 lg:mb-24 px-4">
        <div className="flex items-center justify-center gap-6 mb-6 lg:mb-8">
          <div className="w-12 lg:w-16 h-px bg-linear-to-l from-foreground/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-serif italic text-xl lg:text-2xl"
          >
            Pricing
          </motion.p>
          <div className="w-12 lg:w-16 h-px bg-linear-to-r from-foreground/30 to-transparent" />
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-balance"
        >
          Fixed Price, Zero Limits
        </motion.h2>
      </div>

      <div className="container-width px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-muted rounded-[3rem] md:rounded-[4rem] p-3 md:p-6 lg:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border-[4px] md:border-[6px] border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-stretch">
            
            {/* Left Side: Pricing Info */}
            <div className="flex flex-col justify-between p-6 md:p-8 lg:p-12 min-h-[350px] md:min-h-[400px]">
              <div>
                <div className="flex items-center gap-4 mb-12 md:mb-20">
                  <span className={`text-sm md:text-base font-bold transition-colors duration-200 ${isMonthly ? 'text-brand' : 'text-muted-foreground'}`}>Monthly</span>
                  <button 
                    onClick={handleToggle}
                    className="w-12 h-6 md:w-14 md:h-7 rounded-full bg-background/50 relative p-1 transition-colors"
                  >
                    <motion.div 
                      animate={{ x: isMonthly ? 0 : 24 }}
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-brand shadow-sm"
                    />
                  </button>
                  <span className={`text-sm md:text-base font-bold transition-colors duration-200 ${!isMonthly ? 'text-brand' : 'text-muted-foreground'}`}>Custom</span>
                </div>

                <div className="mb-8 h-20 md:h-24 flex items-center">
                  <motion.div 
                    layout
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex items-baseline perspective-[1000px] overflow-visible"
                  >
                    <AnimatePresence initial={false} mode="popLayout">
                      {!isMonthly && (
                        <motion.span
                          key="from-label"
                          initial={{ rotateY: -90, x: -20, opacity: 0 }}
                          animate={{ rotateY: 0, x: 0, opacity: 1 }}
                          exit={{ rotateY: 90, x: 20, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-xl md:text-3xl text-muted-foreground font-medium mr-2 md:mr-3 shrink-0 origin-center"
                        >
                          from
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <motion.div 
                      layout
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter flex items-baseline"
                    >
                      <AnimatePresence initial={false} mode="popLayout">
                        <motion.span
                          key={isMonthly ? "monthly" : "custom"}
                          initial={{ rotateY: -90, scale: 0.9, opacity: 0 }}
                          animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                          exit={{ rotateY: 90, scale: 0.9, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="tabular-nums whitespace-nowrap origin-center"
                        >
                          {data.price}
                        </motion.span>
                      </AnimatePresence>
                    </motion.div>

                    <AnimatePresence initial={false} mode="popLayout">
                      {isMonthly && (
                        <motion.span
                          key="mo-label"
                          initial={{ rotateY: -90, x: 20, opacity: 0 }}
                          animate={{ rotateY: 0, x: 0, opacity: 1 }}
                          exit={{ rotateY: 90, x: -20, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium tracking-normal ml-1 md:ml-2 shrink-0 origin-center"
                        >
                          /mo
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8 mt-auto">
                 <div className="flex items-center gap-2 px-1 text-[10px] md:text-[13px] font-bold text-success uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Booking Open — 2 Spots Left
                 </div>

                 <a 
                    href="https://wa.me/923219900724" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative flex items-center p-1.5 md:p-2 overflow-hidden rounded-full bg-background/80 w-full md:w-fit"
                  >
                    <motion.span className="group relative flex items-center justify-center gap-3 px-6 py-3.5 md:px-8 md:py-4 text-background font-bold bg-foreground rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-full md:w-auto" whileHover="hover">
                      <span className="text-xs md:text-base">Get Started on WhatsApp</span>
                      <div className="relative flex items-center">
                        <MoveRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                        <motion.div
                          className="absolute"
                          initial={{ x: 0, opacity: 0 }}
                          variants={{
                            hover: {
                              x: 40,
                              opacity: [0, 1, 0],
                              transition: { duration: 0.4, ease: "easeOut" }
                            }
                          }}
                        >
                          <MoveRight size={16} />
                        </motion.div>
                      </div>
                    </motion.span>
                  </a>
              </div>
            </div>

            {/* Right Side: Features & Testimonial Inner Card */}
            <div 
              className="bg-background rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-16 shadow-[0_25px_50px_rgba(0,0,0,0.04)] border border-border flex flex-col justify-between rotate-[1.2deg]"
            >
              <div className="overflow-hidden">
                <h3 className="text-lg md:text-xl font-bold mb-8 md:mb-10 text-foreground">What's included</h3>
                <ul className="space-y-4 md:space-y-6 mb-12 lg:mb-16 md:h-[340px]">
                  {data.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 md:gap-4 text-foreground font-medium text-base md:text-lg">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-foreground flex items-center justify-center shrink-0">
                         <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-foreground rounded-full" />
                      </div>
                      <div className="transition-opacity duration-200">
                        {!hasToggled ? (
                          <BlurText text={item} delay={0.2 + (i * 0.05)} />
                        ) : (
                          <span>{item}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto overflow-hidden">
                <div className="min-h-[100px] md:min-h-[120px] mb-6 md:mb-8">
                  <p className="text-base md:text-xl font-medium leading-relaxed text-muted-foreground transition-opacity duration-200">
                    {!hasToggled ? (
                      <BlurText text={data.review.text} delay={0.4} />
                    ) : (
                      <span>{data.review.text}</span>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-muted overflow-hidden border-2 border-background shadow-sm shrink-0">
                    <img src={data.review.avatar} alt={data.review.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm md:text-base">{data.review.author}</p>
                    <p className="text-[10px] md:text-sm text-muted-foreground font-medium">{data.review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-12 md:gap-x-16">
            {gridItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 group"
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-foreground shrink-0" strokeWidth={1.5} />
                <div className="flex-1 flex items-center gap-4">
                  <span className="text-muted-foreground font-medium text-xs md:text-sm whitespace-nowrap group-hover:text-foreground transition-colors">{item.text}</span>
                  <div className="h-px bg-foreground/10 flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}