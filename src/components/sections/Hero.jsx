import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MoveRight } from "lucide-react"

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
    <section className="relative min-h-screen flex flex-col justify-center pt-32 py-20 overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.02),transparent)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center container-width px-4">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-background border border-border text-[12px] md:text-[13px] font-medium mb-10 md:mb-12 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          Booking Open — 2 Spots Left
        </motion.div>

        {/* Heading Container */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.05] tracking-tight mb-10 md:mb-12 flex flex-col items-center gap-y-4 md:gap-y-6">
          {/* First Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
            <BlurText text="Unlimited" delay={1} className="text-foreground" />

            {/* Box 1 */}
            <motion.div
              variants={dropVariants}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => setShowImages(true)}
              className="w-[50px] h-[38px] md:w-[110px] md:h-[75px] rounded-[12px] md:rounded-[24px] bg-foreground overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] relative -rotate-3 border-[2px] md:border-[3px] border-foreground"
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

            <BlurText text="Design" delay={1.3} className="text-muted-foreground" />
          </div>

          {/* Second Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4">
            <BlurText text="for" delay={1.5} className="text-muted-foreground" />

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
              className="w-[50px] h-[34px] md:w-[100px] md:h-[66px] rounded-[12px] md:rounded-[22px] bg-foreground/90 overflow-hidden shadow-lg flex items-center justify-center p-2 rotate-3 border-[2px] md:border-[3px] border-foreground"
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
              className="text-foreground"
            />
          </div>
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 2, duration: 1 }}
          className="text-sm md:text-base text-muted-foreground max-w-lg mb-12 leading-relaxed font-normal px-4"
        >
          We help startups and brands create beautiful, functional
          products — fast and hassle-free.
        </motion.p>

        {/* CTA & Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="flex flex-col items-center gap-6 md:flex-row"
        >
          <button className="relative flex items-center p-1.5 overflow-hidden text-base md:text-lg rounded-full bg-background/80">
            <motion.span className="group relative flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-background font-bold bg-foreground rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform active:scale-[0.98]" whileHover="hover">
              <span>Choose your plan</span>
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

          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-border bg-muted overflow-hidden shadow-sm"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt="avatar"
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-normal text-muted-foreground tracking-tight uppercase">
              Trusted by Leaders
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
