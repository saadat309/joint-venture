import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Smartphone, LayoutGrid, Zap, Search, Monitor, Target, FileText, Heart, Globe } from "lucide-react";

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
    <section id="pricing" className="section-padding bg-background py-24 lg:py-32">
      <div className="container-width text-center mb-16 lg:mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#777] font-serif italic text-xl lg:text-2xl mb-4"
        >
          Pricing
        </motion.p>
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

      <div className="container-width">
        <div className="max-w-6xl mx-auto bg-[#f0f0f0] rounded-[3rem] md:rounded-[4rem] p-4 md:p-6 lg:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border-[6px] border-[#e5e5e5] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side: Pricing Info */}
            <div className="flex flex-col justify-between p-8 lg:p-12 min-h-[400px]">
              <div>
                <div className="flex items-center gap-4 mb-20">
                  <span className={`text-base font-bold transition-colors duration-200 ${isMonthly ? 'text-[#FF5500]' : 'text-[#888]'}`}>Monthly</span>
                  <button 
                    onClick={handleToggle}
                    className="w-14 h-7 rounded-full bg-white/50 relative p-1 transition-colors"
                  >
                    <motion.div 
                      animate={{ x: isMonthly ? 0 : 28 }}
                      className="w-5 h-5 rounded-full bg-[#FF5500] shadow-sm"
                    />
                  </button>
                  <span className={`text-base font-bold transition-colors duration-200 ${!isMonthly ? 'text-[#FF5500]' : 'text-[#888]'}`}>Custom</span>
                </div>

                <div className="mb-8 h-24 flex items-center">
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
                          className="text-2xl md:text-3xl text-[#888] font-medium mr-3 shrink-0 origin-center"
                        >
                          from
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <motion.div 
                      layout
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter flex items-baseline"
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
                          className="text-2xl md:text-3xl lg:text-4xl text-[#888] font-medium tracking-normal ml-2 shrink-0 origin-center"
                        >
                          /mo
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-8 mt-auto">
                 <div className="flex items-center gap-2 px-1 text-[11px] md:text-[13px] font-bold text-[#1db954] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1db954] animate-pulse" />
                    Booking Open — only 2 Spots Left
                 </div>

                 <button className="relative flex items-center p-2 overflow-hidden rounded-full bg-white/80 w-fit">
                    <span className="group relative flex items-center gap-3 px-8 py-4 text-white font-bold bg-black rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                      <span className="text-sm md:text-base">Book Free Discovery Call</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
              </div>
            </div>

            {/* Right Side: Features & Testimonial Inner Card */}
            <div 
              className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 shadow-[0_25px_50px_rgba(0,0,0,0.04)] border border-black/[0.02] flex flex-col justify-between rotate-[1.2deg]"
            >
              <div className="overflow-hidden">
                <h3 className="text-xl font-bold mb-10 text-black">What's included</h3>
                <ul className="space-y-6 mb-16 h-[340px]">
                  {data.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-black font-medium text-lg">
                      <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center shrink-0">
                         <div className="w-2.5 h-2.5 bg-black rounded-full" />
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
                <div className="min-h-[120px] mb-8">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-[#555] transition-opacity duration-200">
                    {!hasToggled ? (
                      <BlurText text={data.review.text} delay={0.4} />
                    ) : (
                      <span>{data.review.text}</span>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <img src={data.review.avatar} alt={data.review.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-base">{data.review.author}</p>
                    <p className="text-sm text-[#888] font-medium">{data.review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-24 lg:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
            {gridItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 group"
              >
                <item.icon className="w-5 h-5 text-black shrink-0" strokeWidth={1.5} />
                <div className="flex-1 flex items-center gap-4">
                  <span className="text-[#888] font-medium text-sm whitespace-nowrap group-hover:text-black transition-colors">{item.text}</span>
                  <div className="h-px bg-black/10 flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
