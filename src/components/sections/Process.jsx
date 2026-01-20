import { motion } from "framer-motion";

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
  return (
    <section className="relative overflow-hidden section-padding bg-background min-h-[900px] flex flex-col justify-center">
      <div className="mb-24 text-center container-width relative z-20">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-16 h-px bg-linear-to-l from-black/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#777] font-serif italic text-2xl"
          >
            Our Process, Explained
          </motion.p>
          <div className="w-16 h-px bg-linear-to-r from-black/30 to-transparent" />
        </div>
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl">
          Here's how it works
        </h2>
      </div>

      <div className="relative container-width mx-auto">
        {/* Connecting Lines (Desktop only) - High Z-index to be OVER cards */}
        <div className="absolute inset-0 pointer-events-none z-30 hidden lg:block overflow-visible">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1200 400"
            fill="none"
          >
            {/* Line 1: Card 1 (Right) to Card 2 (Top Left) */}
            <motion.path
              d="M220,40 C280,-60 400,-60 440,-30"
              stroke="#FF5500"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
            />
            <motion.circle
              cx="220"
              cy="40"
              r="6"
              fill="white"
              stroke="#FF5500"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.circle
              cx="440"
              cy="-30"
              r="6"
              fill="white"
              stroke="#FF5500"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.3 }}
              viewport={{ once: true }}
            />

            {/* Line 2: Card 2 (Right) to Card 3 (Left) - Entangled loop */}
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
                transition={{ delay: 2, duration: 1.2, ease: "easeInOut" }}
              />
            </g>

            <motion.circle
              cx="735"
              cy="60"
              r="6"
              fill="white"
              stroke="#FF5500"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.circle
              cx="995"
              cy="127"
              r="6"
              fill="white"
              stroke="#FF5500"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.3 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center -space-y-12 md:space-y-0 md:-space-x-16 lg:-space-x-2 relative z-10 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 50,
                x:
                  typeof window !== "undefined" &&
                  window.innerWidth >= 768 &&
                  step.number === "1"
                    ? "100%"
                    : typeof window !== "undefined" &&
                        window.innerWidth >= 768 &&
                        step.number === "3"
                      ? "-100%"
                      : 0,
                rotate: Math.random() * 20 - 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                rotate:
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? step.rotation
                    : 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              className={`relative w-full md:w-125 ${i === 1 ? "md:-mt-32 z-20" : "z-10"}`}
            >
              <div
                className={`
                    relative p-10 aspect-square
                    bg-white 
                    rounded-[2.5rem] 
                    border-[6px] border-[#f0f0f0] 
                    shadow-[0_15px_35px_rgba(0,0,0,0.1)]
                    flex flex-col justify-between
                `}
              >
                <div className="text-6xl font-bold text-black leading-none mb-12">
                  {step.number}
                </div>

                <div>
                  <h3 className="mb-3 text-2xl font-bold font-sans tracking-tight">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground/90 font-medium text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient Spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/40 blur-3xl rounded-full pointer-events-none -z-10" />
    </section>
  );
}
