import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { MoveRight, Instagram, Linkedin, Mail } from "lucide-react";

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
                    <footer
                      id="contact"
                      ref={containerRef}
                      className="pt-32 pb-12 bg-transparent overflow-hidden"
                    >      <div className="container mx-auto">
        <div className="relative overflow-hidden text-center bg-black rounded-[3rem] md:rounded-[4rem] px-8 md:px-24 h-[700px] md:h-[800px] shadow-[0_50px_100px_rgba(255,255,255,0.03)] border border-white/5 flex flex-col justify-between">
          
          {/* Main Light Source (Top Left Glow) */}
          <div className="absolute -top-[20%] -left-[20%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_60%)] blur-[60px] pointer-events-none" />

          {/* Folded Light / God Rays Pattern */}
          <div 
            className="absolute inset-0 pointer-events-none overflow-hidden opacity-50"
            style={{
              maskImage: "linear-gradient(to bottom right, black 40%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom right, black 40%, transparent 100%)"
            }}
          >
             <div 
              className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%]"
              style={{
                background: "repeating-linear-gradient(115deg, transparent 0%, rgba(255, 255, 255, 0.03) 2%, transparent 5%, rgba(255, 255, 255, 0.02) 8%, transparent 12%)",
                transform: "rotate(0deg)", // Gradient itself provides the angle
                filter: "blur(2px)"
              }}
            />
          </div>

          {/* Heavy Grain Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-screen"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              filter: "contrast(150%) brightness(120%)"
            }}
          />

          {/* Centered Animated Content Wrapper */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <motion.div 
              style={{ y, opacity }}
              className="relative z-10 w-full"
            >
              {/* 2 Spots Header - Tight spacing */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-12 h-px bg-linear-to-l from-white/40 to-transparent" />
                <p className="text-white/70 font-serif italic text-xl md:text-2xl">
                  2 spots available
                </p>
                <div className="w-12 h-px bg-linear-to-r from-white/40 to-transparent" />
              </div>

              {/* Main Heading - Limited line-height */}
              <h2 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.9] md:leading-[1.1]">
                <span className="text-white">Let's</span>{" "}
                <span className="text-white/60">Connect</span>
              </h2>

              {/* Subtext - Limited row spacing */}
              <p className="max-w-sm mx-auto mb-10 text-sm md:text-base leading-snug md:leading-relaxed text-white font-medium">
                Feel free to contact me if having any questions.<br />
                I'm available for new projects or just for chatting.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center w-full px-4 md:px-0">
                <button className="relative flex items-center p-1.5 md:p-2 overflow-hidden rounded-full bg-white/10 group transition-all w-full md:w-auto">
                  <motion.span className="relative flex items-center justify-center gap-3 w-full px-6 py-3.5 md:px-8 md:py-4 text-white font-bold bg-black rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/10" whileHover="hover">
                    <span className="text-sm md:text-base">Book a free intro call</span>
                    <div className="relative flex items-center">
                      <MoveRight
                        size={18}
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
                        <MoveRight size={18} />
                      </motion.div>
                    </div>
                  </motion.span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Static */}
          <div className="relative z-10 pt-8 pb-10">
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