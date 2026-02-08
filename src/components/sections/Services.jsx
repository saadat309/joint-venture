import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Film, Camera, Cpu, Code2, Sparkles } from "lucide-react";

const services = [
  {
    title: "AI Filmmaking",
    description: "Cinematic AI storytelling with consistent frames, mastering camera angles and lighting for seamless narratives.",
    icon: Film,
    color: "bg-orange-500",
  },
  {
    title: "AI Products Photoshoot",
    description: "Hyper-realistic product imagery and high-fidelity Photoshop integration for premium brand presentation.",
    icon: Camera,
    color: "bg-blue-500",
  },
  {
    title: "AI Automation",
    description: "Next-gen automation agents and LLM integration to streamline complex workflows and boost efficiency.",
    icon: Cpu,
    color: "bg-green-500",
  },
  {
    title: "Full Stack Web Development",
    description: "Robust, scalable applications built with modern stacks, focused on performance and AI integration.",
    icon: Code2,
    color: "bg-zinc-800",
  },
  {
    title: "AI Vibe Coding",
    description: "Harmonizing natural language with functional code to capture the exact 'vibe' and identity of your brand.",
    icon: Sparkles,
    color: "bg-purple-500",
  }
];

function Card({ 
  index, 
  title, 
  description, 
  icon: Icon, 
  color, 
  progress, 
  range, 
  targetScale 
}) {
  const containerRef = useRef(null);
  
  // Scale transform based on parent scroll progress (for mobile stacking)
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className={`
        h-screen flex items-start justify-center sticky top-0 
        lg:static lg:h-auto lg:block lg:w-full
      `}
    >
      <motion.div
        style={{ 
          scale: typeof window !== 'undefined' && window.innerWidth < 1024 ? scale : 1,
          top: typeof window !== 'undefined' && window.innerWidth < 1024 ? `calc(12rem + ${index * 24}px)` : undefined,
          zIndex: index + 10,
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
        whileHover={{ 
          rotate: -5,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        className={`
          relative bg-background border-[6px] md:border-[6px] border-border rounded-3xl 
          p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] lg:hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] 
          transition-shadow duration-500 flex flex-col justify-start group cursor-default 
          aspect-4/3 w-[85%] sm:w-[70%] lg:w-full origin-top
        `}
      >
        <div className="flex flex-col gap-6">
          <div className={`${color} w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}>
            <Icon size={24} strokeWidth={2} />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-md font-medium">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Services() {
  const containerRef = useRef(null);
  
  // Track scroll progress of the entire section for mobile stacking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative section-padding bg-transparent pt-7 lg:pt-11"
    >
      <div className="container-width mb-8 lg:mb-24 text-center sticky top-12 z-40 lg:relative lg:z-auto py-4 lg:py-0">
        <div className="flex items-center justify-center gap-6 mb-6 lg:mb-8">
          <div className="w-12 lg:w-16 h-px bg-linear-to-l from-foreground/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-serif italic text-xl lg:text-2xl"
          >
            Our Offerings
          </motion.p>
          <div className="w-12 lg:w-16 h-px bg-linear-to-r from-foreground/30 to-transparent" />
        </div>
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl text-balance">
          What We Do Best
        </h2>
      </div>

      <div className="container-width overflow-visible">
        {/* Desktop View: Grid layout */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card 
              key={service.title} 
              index={i}
              {...service}
              progress={scrollYProgress}
              range={[0, 1]}
              targetScale={1}
            />
          ))}
        </div>

        {/* Mobile View: Stacked scroll logic from example.jsx */}
        <div className="flex flex-col lg:hidden">
          {services.map((service, i) => {
            // Logic inspired by example.jsx
            // Last card should not scale
            const isLast = i === services.length - 1;
            const targetScale = isLast ? 1 : 1 - (services.length - i) * 0.05;
            // Map scroll progress to a range for each card's "receding" phase
            const rangeStart = i * (1 / services.length);
            return (
              <Card 
                key={`${service.title}_mobile`} 
                index={i}
                {...service}
                progress={scrollYProgress}
                range={[rangeStart, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
