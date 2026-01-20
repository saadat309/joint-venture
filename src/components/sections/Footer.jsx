import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Instagram, Linkedin, Mail } from "lucide-react";

const XIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className="w-4 h-4 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Smoothing the scroll for a more organic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map the smooth scroll to a controlled drop and slide
  const y = useTransform(smoothProgress, [0, 1], [-180, 0]);
  const opacity = useTransform(smoothProgress, [0.4, 0.9], [0, 1]);

  return (
    <footer ref={containerRef} className="pt-24 pb-12 bg-background overflow-hidden">
      <div className="container-width">
        <div className="relative overflow-hidden text-center bg-[#0a0a0a] rounded-[3rem] md:rounded-[4rem] px-8 md:px-24 h-[700px] md:h-[800px] shadow-[0_50px_100px_rgba(0,0,0,0.3)] flex flex-col justify-between">
          {/* Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          {/* Light Beam Effect */}
          <div 
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] bg-linear-to-br from-white/[0.08] via-white/[0.02] to-transparent -rotate-[25deg] blur-3xl pointer-events-none" 
          />

          {/* Centered Animated Content Wrapper */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <motion.div 
              style={{ y, opacity }}
              className="relative z-10 w-full"
            >
              {/* 2 Spots Header - Tight spacing */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-10 h-px bg-white/10" />
                <p className="text-white/40 font-serif italic text-base md:text-lg">
                  2 spots available
                </p>
                <div className="w-10 h-px bg-white/10" />
              </div>

              {/* Main Heading - Limited line-height */}
              <h2 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.9] md:leading-[1.1]">
                <span className="text-white">Let's</span>{" "}
                <span className="text-white/30">Connect</span>
              </h2>

              {/* Subtext - Limited row spacing */}
              <p className="max-w-sm mx-auto mb-10 text-sm md:text-base leading-snug md:leading-relaxed text-white/40 font-medium">
                Feel free to contact me if having any questions.<br />
                I'm available for new projects or just for chatting.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <button className="relative flex items-center p-2 overflow-hidden rounded-full bg-white/10 group transition-all hover:scale-[1.02]">
                  <span className="relative flex items-center gap-3 px-8 py-4 text-white font-bold bg-black rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10">
                    <span className="text-sm md:text-base">Book a free intro call</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Static */}
          <div className="relative z-10 pt-8 pb-10 border-t border-white/5">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* Copyright Block */}
              <div className="relative py-1.5">
                <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
                <span className="text-white/30 text-[10px] md:text-xs font-medium pt-1.5 block px-3 uppercase tracking-[0.2em]">
                  © Hanzo Studio, 2025
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[Mail, XIcon, Linkedin, Instagram].map((Icon, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-center w-9 h-9 transition-all border border-white/10 rounded-full cursor-pointer text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5"
                  >
                    {typeof Icon === 'function' ? <Icon /> : <Icon size={14} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
