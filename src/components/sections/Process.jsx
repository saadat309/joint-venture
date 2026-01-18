import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Subscribe",
    description: "Choose a plan and request as many designs as you need.",
  },
  {
    number: "2",
    title: "Request",
    description: "Choose a plan and request as many designs as you need.",
  },
  {
    number: "3",
    title: "Get Your Designs",
    description: "Choose a plan and request as many designs as you need.",
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden section-padding bg-background">
      <div className="mb-24 text-center container-width">
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

      <div className="relative container-width">
        {/* Curved Lines (Desktop only) */}
        <div className="absolute left-0 hidden w-full h-full -translate-y-1/2 pointer-events-none top-1/2 lg:block">
          <svg className="w-full h-full" viewBox="0 0 1000 200" fill="none">
            <motion.path
              d="M150,100 Q300,20 450,100"
              stroke="#000"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
            />
            <motion.path
              d="M550,100 Q700,180 850,100"
              stroke="#000"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.1 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-10 transition-all duration-500 bg-white border shadow-sm rounded-3xl border-black/5 group hover:shadow-xl"
            >
              <div className="text-[120px] font-bold leading-none absolute -top-12 left-6 text-black/5 group-hover:text-black/10 transition-colors">
                {step.number}
              </div>
              <div className="relative pt-8">
                <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
