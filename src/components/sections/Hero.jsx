import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const carouselImages = [
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80"
]

const BlurText = ({ text, delay = 0, className = "" }) => {
  const characters = text.split("")
  return (
    <span className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const [index, setIndex] = useState(0)
  const [showImages, setShowImages] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const dropVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.02),transparent)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center container-width">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/5 text-[14px] font-medium mb-12 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1db954]" />
          Booking Open — 2 Spots Left
        </motion.div>

        {/* Heading Container */}
        <h1 className="text-[30px] md:text-[60px] lg:text-[80px] font-medium leading-[1.05] tracking-tight mb-12 flex flex-col items-center">
          {/* First Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-4">
            <BlurText text="Unlimited" delay={1} className="text-black" />

            {/* Box 1 */}
            <motion.div
              variants={dropVariants}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => setShowImages(true)}
              className="w-[80px] h-[60px] md:w-[130px] md:h-[90px] rounded-[24px] md:rounded-[32px] bg-black overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative -rotate-3 border-[3px] border-black"
            >
              <AnimatePresence>
                {showImages && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={index}
                        src={carouselImages[index]}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <BlurText text="Design" delay={1.3} className="text-[#a0a0a0]" />
          </div>

          {/* Second Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-4">
            <BlurText text="for" delay={1.5} className="text-[#a0a0a0]" />

            {/* Box 2 */}
            <motion.div
              variants={dropVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.2,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-[80px] h-[50px] md:w-[120px] md:h-[80px] rounded-[24px] md:rounded-[28px] bg-[#222] overflow-hidden shadow-xl flex items-center justify-center p-3 rotate-3 border-[3px] border-black"
            >
              <AnimatePresence>
                {showImages && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    src="https://framerusercontent.com/images/kE0M3vK0f0S1V0V1V0V1V0V1.png"
                    alt="Infinity Logo"
                    className="object-contain w-full h-full invert opacity-80"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=200&q=80";
                      e.target.classList.remove("invert");
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            <BlurText
              text="Solid Startups"
              delay={1.7}
              className="text-black"
            />
          </div>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 2, duration: 1 }}
          className="text-sm md:text-base text-[#777] max-w-xl mb-12 leading-relaxed font-normal"
        >
          We help startups and brands create beautiful, <br /> functional
          products — fast and hassle-free.
        </motion.p>

        {/* CTA & Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="flex flex-col items-center gap-8 md:flex-row"
        >
          <button className="relative flex items-center p-3 overflow-hidden text-xl rounded-full bg-white/80">
            <span className="group relative flex items-center gap-3 px-10 py-5 text-white font-bold bg-black rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <span>Choose your plan</span>
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </button>

          <div className="flex flex-col items-start gap-1">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#f2f2f2] bg-slate-300 overflow-hidden shadow-sm"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt="avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <span className="text-[9px] font-normal text-[#888] tracking-tight uppercase">
              Trusted by Leaders
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}