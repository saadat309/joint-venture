import { motion } from "framer-motion"

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

export function CaseStudies() {
  return (
    <section id="work" className="section-padding bg-background py-24 lg:py-32">
      <div className="container-width mb-16 lg:mb-24 text-center">
        <div className="flex items-center justify-center gap-6 mb-6 lg:mb-8">
          <div className="w-12 lg:w-16 h-px bg-linear-to-l from-black/30 to-transparent" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#777] font-serif italic text-xl lg:text-2xl"
          >
            Our Projects
          </motion.p>
          <div className="w-12 lg:w-16 h-px bg-linear-to-r from-black/30 to-transparent" />
        </div>
        <h2 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl text-balance">
          Recent Case Studies
        </h2>
      </div>

      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1 
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] bg-white overflow-hidden mb-8 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700">
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
                <h3 className="text-xl md:text-2xl font-bold text-black tracking-tight">{project.title}</h3>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-bold uppercase tracking-widest text-[#888] bg-[#f0f0f0] px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
