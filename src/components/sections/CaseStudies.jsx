import { motion } from "framer-motion"

const projects = [
  {
    title: "Strida",
    category: "Portfolio",
    subCategory: "Minimal",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563ec4c?auto=format&fit=crop&w=1200&q=80",
    tags: ["UI/UX", "Web"],
  },
  {
    title: "Bravo",
    category: "SaaS",
    subCategory: "App",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
    tags: ["SaaS", "Product"],
  },
  {
    title: "Nitro",
    category: "Design System",
    subCategory: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["System", "App"],
  },
  {
    title: "Fargo",
    category: "SaaS",
    subCategory: "Web",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1200&q=80",
    tags: ["SaaS", "Web"],
  }
]

export function CaseStudies() {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-width mb-16">
        <p className="text-muted-foreground font-serif italic text-xl mb-4 text-center">Our Projects</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center">Recent Case Studies</h2>
      </div>

      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[2.5rem] bg-slate-100 overflow-hidden mb-8 border border-black/5 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-end px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground border border-black/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-sm font-medium text-muted-foreground">{project.category}</p>
                   <p className="text-[13px] text-muted-foreground/60">{project.subCategory}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}