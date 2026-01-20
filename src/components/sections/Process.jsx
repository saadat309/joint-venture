import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Subscribe",
    description: "Choose a plan and request as many designs as you need.",
    rotation: -4,
  },
  {
    number: "2",
    title: "Request",
    description: "Choose a plan and request as many designs as you need.",
    rotation: 6,
  },
  {
    number: "3",
    title: "Get Your Designs",
    description: "Choose a plan and request as many designs as you need.",
    rotation: -3,
  },
];

export function Process() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative section-padding bg-background overflow-x-clip flex flex-col justify-center py-20 lg:py-32">
      <div className="mb-16 lg:mb-24 text-center container-width relative z-20">
        <div className="flex items-center justify-center gap-6 mb-6 lg:mb-8">
          <div className="w-12 lg:w-16 h-px bg-linear-to-l from-black/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#777] font-serif italic text-xl lg:text-2xl"
          >
            Our Process, Explained
          </motion.p>
          <div className="w-12 lg:w-16 h-px bg-linear-to-r from-black/30 to-transparent" />
        </div>
        <h2 className="text-3xl font-normal tracking-tight md:text-5xl lg:text-6xl text-balance">
          Here's how it works
        </h2>
      </div>

      <div className="relative container-width mx-auto px-4 md:px-8 lg:px-12">
        {/* DESKTOP CONNECTING LINES (lg and up) */}
        <div className="absolute inset-0 pointer-events-none z-30 hidden lg:block overflow-visible">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1200 400"
            fill="none"
          >
            <motion.path
              d="M220,40 C280,-60 400,-60 440,-30"
              stroke="#FF5500"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            />
            <g transform="translate(650 50)">
              <motion.path
                d="M85 10 C14 160 242 83 144 68 C39 65 10 227 172 181 Q242 161 344 78"
                stroke="#FF5500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
              />
            </g>
          </svg>
        </div>

        {/* MOBILE CONNECTING LINES (hidden on lg) */}
        <div className="absolute inset-0 pointer-events-none z-30 lg:hidden overflow-visible left-1/2 -translate-x-1/2 w-full max-w-[400px]">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 400 1200"
            fill="none"
          >
            {/* Path 1: Arch (Vertical) */}
            <motion.path
              d="M330,280 C400,320 400,420 340,460"
              stroke="#FF5500"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
            />
            {/* Path 2: Complex Twist (Vertical adaptation of the desktop path) */}
            <g transform="translate(260 680) rotate(90) scale(0.8 -0.8)">
              <motion.path
                d="M85 10 C14 160 242 83 144 68 C39 65 10 227 172 181 Q242 161 344 78"
                stroke="#FF5500"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
              />
            </g>
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-24 md:gap-32 lg:gap-0 relative z-10 w-full">
          {steps.map((step, i) => (
            <div key={step.number} className="relative w-full flex justify-center lg:w-1/3">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  rotate: isMounted ? (i % 2 === 0 ? -2 : 2) : 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: isMounted ? step.rotation : 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
                }}
                className={`
                  relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-none
                  ${i === 1 ? "lg:-mt-24 z-20" : "z-10"}
                `}
              >
                <div
                  className={`
                    relative p-8 md:p-10 aspect-square
                    bg-white 
                    rounded-[2rem] md:rounded-[2.5rem] 
                    border-[4px] md:border-[6px] border-[#f0f0f0] 
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    flex flex-col justify-between
                  `}
                >
                  <div className="text-5xl md:text-6xl font-bold text-black leading-none mb-8 md:mb-12">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="mb-2 md:mb-3 text-xl md:text-2xl font-bold font-sans tracking-tight">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground/90 font-medium text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Gradient Spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/40 blur-3xl rounded-full pointer-events-none -z-10" />
    </section>
  );
}
