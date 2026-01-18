import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const features = [
  "Unlimited design requests",
  "Fast turnaround",
  "Fixed monthly rate",
  "Async communication",
  "Flexible scope",
  "Pause anytime",
]

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-width text-center mb-16">
        <p className="text-muted-foreground font-serif italic text-xl mb-4">Pricing</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Fixed Price, Zero Limits</h2>
      </div>

      <div className="container-width">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] border border-black/5 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Pricing */}
            <div className="p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-black/5">
              <div className="flex items-center gap-4 mb-12">
                <span className={`text-sm font-bold ${isMonthly ? 'text-black' : 'text-muted-foreground'}`}>Monthly</span>
                <button 
                  onClick={() => setIsMonthly(!isMonthly)}
                  className="w-14 h-7 rounded-full bg-slate-100 relative p-1 transition-colors"
                >
                  <motion.div 
                    animate={{ x: isMonthly ? 0 : 28 }}
                    className="w-5 h-5 rounded-full bg-orange-500 shadow-sm"
                  />
                </button>
                <span className={`text-sm font-bold ${!isMonthly ? 'text-black' : 'text-muted-foreground'}`}>Custom</span>
              </div>

              <div className="mb-12">
                <div className="text-7xl font-bold tracking-tighter mb-2">
                  $7,500<span className="text-2xl text-muted-foreground font-medium tracking-normal">/mo</span>
                </div>
                <p className="text-muted-foreground">Unlimited design, one request at a time.</p>
              </div>

              <div className="space-y-8">
                 <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-black/5 text-[13px] font-medium w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Booking Open — 2 Spots Left
                 </div>

                 <button className="group w-full flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-black/80 transition-all shadow-xl">
                    Book Free Discovery Call
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>

            {/* Right Side: Features & Testimonial */}
            <div className="p-12 lg:p-16 bg-slate-50/50">
              <h3 className="text-xl font-bold mb-8">What's included</h3>
              <ul className="space-y-4 mb-16">
                {features.map(item => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground font-medium">
                    <div className="w-5 h-5 rounded-full border border-black/10 flex items-center justify-center">
                       <Check size={12} className="text-black" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
                 <p className="text-lg font-medium leading-relaxed mb-6">
                   "Astrid's minimalist design approach transformed our brand. The simplicity and clarity she brought to our identity made us stand out in a crowded market."
                 </p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=32" alt="Avatar" />
                   </div>
                   <div>
                      <p className="font-bold text-sm">Sophie Lemaire</p>
                      <p className="text-xs text-muted-foreground">Product Lead at Loom</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
