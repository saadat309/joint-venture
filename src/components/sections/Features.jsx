import { Reveal } from "../Reveal"
import { Card } from "@/components/ui/card"
import { Zap, Shield, Globe, Cpu, BarChart, Lock } from "lucide-react"

const features = [
  {
    title: "High Performance",
    description: "Built for speed with sub-millisecond latency for real-time asset management.",
    icon: Zap,
    className: "md:col-span-2",
  },
  {
    title: "Secure by Design",
    description: "Military-grade encryption and multi-sig support for maximum security.",
    icon: Shield,
    className: "md:col-span-1",
  },
  {
    title: "Global Scale",
    description: "Deploy globally with our distributed infrastructure and low-latency nodes.",
    icon: Globe,
    className: "md:col-span-1",
  },
  {
    title: "Intuitive API",
    description: "Powerful developer tools and APIs to integrate Hanzo into your existing workflow.",
    icon: Cpu,
    className: "md:col-span-2",
  },
  {
    title: "Advanced Analytics",
    description: "Gain deep insights into your portfolio with our comprehensive analytics suite.",
    icon: BarChart,
    className: "md:col-span-1",
  },
  {
    title: "Private & Compliant",
    description: "Stay compliant with global regulations while maintaining user privacy.",
    icon: Lock,
    className: "md:col-span-1",
  },
]

export function Features() {
  return (
    <section id="features" className="section-padding bg-black/20">
      <div className="container-width">
        <div className="mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Powerful features for <br /> modern asset management
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Hanzo provides the tools you need to stay ahead in the rapidly 
              evolving world of digital assets.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <Card className={`h-full p-8 glass hover:border-primary/50 transition-colors group ${feature.className}`}>
                <div className="mb-6 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
