import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { LayoutGrid, Search, Monitor, Target, Zap, FileText } from "lucide-react"

const tags = [
  {
    name: "Design systems",
    icon: LayoutGrid,
    color: "bg-orange-500",
    left: "13%",
    top: "-25%",
    initialX: -100,
    rotate: 7
  },
  {
    name: "Animation",
    icon: Zap,
    color: "bg-green-500",
    left: "88%",
    top: "-25%",
    initialX: 100,
    rotate: -8
  },
  { 
    name: "UI/UX", 
    icon: Monitor, 
    color: "bg-zinc-800", 
    left: "10%",
    top: "30%",
    initialX: -150,
    rotate: -1 
  },
  { 
    name: "Prototyping", 
    icon: FileText, 
    color: "bg-pink-500", 
    left: "92%",
    top: "30%",
    initialX: 150,
    rotate: 1 
  },
  {
    name: "Research",
    icon: Search,
    color: "bg-sky-500",
    left: "13%",
    top: "85%",
    initialX: -100,
    rotate: -10
  },
  {
    name: "Strategy",
    icon: Target,
    color: "bg-yellow-500",
    left: "88%",
    top: "85%",
    initialX: 100,
    rotate: 8
  },
]
const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1])
  
  return (
    <motion.span style={{ opacity }} className="relative inline-block">
      {children}
    </motion.span>
  )
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="relative inline-block mr-[0.25em] whitespace-nowrap">
      {children.split("").map((char, i) => {
        const start = range[0] + (i * step)
        const end = range[0] + ((i + 1) * step)
        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        )
      })}
    </span>
  )
}

export function Intro() {
  const containerRef = useRef(null)
  
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.8"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const fullText = "We help startups and enterprise to establish an emotional connection between their products and happy engaged customers"
  const words = fullText.split(" ")

  return (
    <section ref={containerRef} className="py-24 md:py-48 overflow-hidden bg-background">
      <div className="relative text-center container-width">
        {/* Hello! Header with Lines */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="w-16 h-px bg-linear-to-l from-black/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#777] font-serif italic text-2xl"
          >
            Hello!
          </motion.p>
          <div className="w-16 h-px bg-linear-to-r from-black/30 to-transparent" />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* Main Heading with Unified Color and Scroll Reveal - Smaller Font (32px Desktop) */}
          <h2 className="max-w-4xl mx-auto text-[24px] md:text-[32px] font-normal leading-[1.4] tracking-tight px-4 text-black">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <Word key={i} progress={smoothProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>

          {/* Mobile Tags (Visible below LG) */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-px mt-20 lg:hidden px-4">
            {tags.map((tag, i) => (
              <motion.div
                key={`${tag.name}-mobile`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  delay: i * 0.1,
                }}
                className="flex justify-center items-center px-1"
              >
                <motion.div
                  drag
                  dragSnapToOrigin
                  dragElastic={0.2}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <motion.div
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] border-[6px] border-[#f0f0f0] origin-center"
                    style={{ rotate: `${tag.rotate}deg` }}
                  >
                    <div
                      className={`${tag.color} w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm shrink-0`}
                    >
                      <tag.icon size={14} strokeWidth={2.5} />
                    </div>
                    <span className="text-black font-bold text-[13px] whitespace-nowrap">
                      {tag.name}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating Tags (Visible on LG and up) */}
          {tags.map((tag, i) => (
            <motion.div
              key={tag.name}
              initial={{
                opacity: 0,
                x: tag.initialX,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: i * 0.1,
              }}
              className="absolute z-10 items-center justify-center hidden lg:flex"
              style={{
                left: tag.left,
                top: tag.top,
              }}
            >
              {" "}
              <motion.div
                drag
                dragSnapToOrigin
                dragElastic={0.2}
                className="cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full bg-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] border-[6px] border-[#f0f0f0]"
                  style={{
                    rotate: tag.rotate,
                    x: "-50%",
                    y: "-50%",
                  }}
                >
                  <div
                    className={`${tag.color} w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm`}
                  >
                    <tag.icon size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-black font-bold text-[13px] whitespace-nowrap">
                    {tag.name}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}