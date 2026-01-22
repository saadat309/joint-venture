import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Folder } from "lucide-react"
import { useRef } from "react"

export function ProjectCTA() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth scroll movement for the button
  const springY = useSpring(
    useTransform(scrollYProgress, [0, 1], [180, -180]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  )

  // Background parallax: top-biased scroll-over effect
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  const projectImages = [
    "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1481487484168-9b930d5b20f8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80"
  ]

  const scrollToWork = () => {
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const hoverTransition = { 
    duration: 0.4, 
    ease: [0.22, 1, 0.36, 1] 
  }

  const tooltipVariants = {
    initial: { 
      opacity: 0, 
      filter: "blur(20px)",
      rotate: 45, 
      x: "-50%",
      y: 30,
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      filter: "blur(0px)",
      rotate: -12, 
      x: "-50%",
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    },
    hover: {
      y: -12, 
      transition: hoverTransition
    }
  }

  return (
    <section ref={containerRef} className="relative px-4 md:px-6 pb-16 bg-transparent overflow-hidden">
      <div 
        className="max-w-7xl mx-auto relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden min-h-[110vh] md:min-h-0 md:aspect-[16/12] shadow-2xl border-[8px] md:border-[12px] border-border bg-background"
      >
        {/* Parallax Background: Dark Grid of Projects */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-x-0 -top-[25%] h-[150%] bg-foreground p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pointer-events-none"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-8">
            {projectImages.slice(0, 3).map((src, i) => (
              <div key={i} className="w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
                 <img src={src} alt={`Project ${i}`} className="w-full h-full object-cover transition-all duration-700" />
              </div>
            ))}
          </div>

          {/* Column 2 - Hidden on mobile */}
          <div className="hidden md:flex flex-col gap-4 md:gap-8">
             {projectImages.slice(3, 6).map((src, i) => (
              <div key={i} className="w-full aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
                 <img src={src} alt={`Project ${i+3}`} className="w-full h-full object-cover transition-all duration-700" />
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Prominent Top Black Fade only - Taller and Darker */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />

        {/* Content Layer */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div 
            style={{ y: springY }}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: false, margin: "-50px" }}
            className="relative group cursor-pointer"
            onClick={scrollToWork}
          >
            {/* Tooltip */}
            <motion.div 
              variants={tooltipVariants}
              style={{ originY: "100%", originX: "50%" }}
              className="absolute -top-20 left-1/2 whitespace-nowrap bg-foreground text-background text-[16px] md:text-[18px] font-bold px-7 py-4 rounded-2xl shadow-2xl"
            >
              See Recent Work
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rotate-45" />
            </motion.div>

            {/* Folder Button */}
            <div className="relative">
              <motion.div
                initial={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  transition: hoverTransition
                }}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-2xl border border-white/40 backdrop-blur-xl"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-transparent rounded-full flex items-center justify-center">
                  <Folder className="w-8 h-8 md:w-10 md:h-10 text-foreground fill-current" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
