import { motion, useMotionValue, useSpring } from "framer-motion"
import { MoveRight } from "lucide-react"
import { useRef, useState } from "react"

const projects = [
  {
    title: "Strida",
    image: "https://framerusercontent.com/images/kE0M3vK0f0S1V0V1V0V1V0V1.png",
    tags: ["portfolio", "sidebar"],
  },
  {
    title: "Bravo",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    tags: ["ui/ux", "app"],
  },
  {
    title: "Nitro",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["design", "system"],
  },
  {
    title: "Fargo",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1200&q=80",
    tags: ["saas", "web"],
  }
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    x.set(clientX - left)
    y.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1 
      }}
      className="group cursor-pointer"
    >
      <div 
        ref={ref}
        className="relative aspect-4/3 rounded-4xl md:rounded-[2.5rem] bg-background overflow-hidden mb-8 border border-border shadow-[0_10px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute top-0 left-0 z-10 pointer-events-none ml-4 -mt-14 w-12 h-12 bg-foreground rounded-full hidden md:flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <MoveRight className="w-5 h-5 text-background" />
        </motion.div>
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80";
          }}
        />
      </div>
      <div className="flex justify-between items-center px-2">
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{project.title}</h3>
        <div className="flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-4 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function CaseStudies() {
  return (
    <section id="work" className="section-padding bg-transparent py-5 md:py-8">
      <div className="container-width mb-16 lg:mb-24 text-center">
        <div className="flex items-center justify-center gap-6 mb-6 lg:mb-8">
          <div className="w-12 lg:w-16 h-px bg-linear-to-l from-foreground/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-serif italic text-xl lg:text-2xl"
          >
            Our Projects
          </motion.p>
          <div className="w-12 lg:w-16 h-px bg-linear-to-r from-foreground/30 to-transparent" />
        </div>
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl text-balance">
          Recent Case Studies
        </h2>
      </div>

      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}