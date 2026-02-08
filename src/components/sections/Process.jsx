import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Creative Strategy",
    description: "Mapping your AI film vision, product aesthetics, and full-stack web architecture.",
    rotation: -4,
  },
  {
    number: "2",
    title: "Smart Production",
    description: "Building cinematic media, automated AI products, and scalable digital systems.",
    rotation: 6,
  },
  {
    number: "3",
    title: "Rapid Launch",
    description: "Deploying high-impact visuals and AI-powered apps to scale your startup.",
    rotation: -3,
  },
];

export function Process() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="process" className="relative section-padding bg-transparent overflow-x-clip flex flex-col justify-center pt-7 lg:pt-11 pb-0">
      <div className="mb-16 lg:mb-24 text-center container-width relative z-20">
        <div className="flex items-center justify-center gap-6 mb-6 lg:mb-8">
          <div className="w-12 lg:w-16 h-px bg-linear-to-l from-foreground/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-serif italic text-xl lg:text-2xl"
          >
            Our Process, Explained
          </motion.p>
          <div className="w-12 lg:w-16 h-px bg-linear-to-r from-foreground/30 to-transparent" />
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
              className="stroke-brand"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            />
            <motion.circle
              cx="220"
              cy="40"
              r="4"
              className="fill-brand"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.3 }}
            />
            <motion.circle
              cx="440"
              cy="-30"
              r="4"
              className="fill-brand"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.3 }}
            />
            <g transform="translate(650 50)">
              <motion.path
                d="M85 10 C14 160 242 83 144 68 C39 65 10 227 172 181 Q242 161 344 78"
                className="stroke-brand"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="85"
                cy="10"
                r="4"
                className="fill-brand"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.3 }}
              />
              <motion.circle
                cx="344"
                cy="78"
                r="4"
                className="fill-brand"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2, duration: 0.3 }}
              />
            </g>
          </svg>
        </div>

        {/* MOBILE CONNECTING LINES (hidden on lg) */}
        <div className="absolute inset-0 pointer-events-none z-30 lg:hidden overflow-visible left-1/2 -translate-x-1/2 w-full ">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 400 1200"
            fill="none"
          >
            {/* Path 1: Arch (Vertical) */}
            <g transform="translate(150 200) scale(0.6 )">
            <motion.path
              d="M330,160 C460,280 420,420 340,460"
              className="stroke-brand"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
            />
            <motion.circle
              cx="330"
              cy="160"
              r="5"
              className="fill-brand"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.3 }}
            />
            <motion.circle
              cx="340"
              cy="460"
              r="5"
              className="fill-brand"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.3 }}
            />
            </g>

            {/* Path 2: Complex Twist (Vertical adaptation of the desktop path) */}
            <g transform="translate(290 680) rotate(90) scale(0.6 -0.6)">
              <motion.path
                d="M85 10 C14 160 242 83 144 68 C39 65 10 227 172 181 Q242 161 344 78"
                className="stroke-brand"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="85"
                cy="10"
                r="5"
                className="fill-brand"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.3 }}
              />
              <motion.circle
                cx="344"
                cy="78"
                r="5"
                className="fill-brand"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.3, duration: 0.3 }}
              />
            </g>
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-0 relative z-10 w-full">
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
                  relative w-full lg:max-w-none
                  ${i === 1 ? "lg:-mt-24 z-20" : "z-10"}
                `}
              >
                <div
                  className={`
                    relative p-8 md:p-10 
                    w-full max-w-2xl lg:max-w-none
                    aspect-auto md:aspect-[2.5/1] lg:aspect-square
                    bg-background 
                    rounded-[2rem] md:rounded-[2.5rem] 
                    border-[2px] md:border-[4px] lg:border-[6px] border-border 
                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                    flex flex-row items-center gap-6 md:gap-12
                    lg:flex-col lg:items-start lg:justify-between
                  `}
                >
                  <div className="text-5xl md:text-7xl lg:text-6xl font-bold text-foreground leading-none lg:mb-12 shrink-0">
                    {step.number}
                  </div>

                  <div className="text-left">
                    <h3 className="mb-1 md:mb-2 text-xl md:text-3xl lg:text-2xl font-bold font-sans tracking-tight">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground/90 font-medium text-sm md:text-lg lg:text-lg max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
