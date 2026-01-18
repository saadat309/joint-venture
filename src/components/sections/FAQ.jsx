import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What's the difference between a subscription and a custom project?",
    answer: "Our subscription model provides ongoing design support with unlimited requests, whereas custom projects are one-off engagements with a specific scope and timeline."
  },
  {
    question: "How fast is the turnaround?",
    answer: "Most design requests are completed within 2-3 business days. More complex requests may take longer."
  },
  {
    question: "How many requests can I make?",
    answer: "You can add as many requests to your queue as you like, and they will be delivered one by one."
  },
  {
    question: "What types of design do you handle?",
    answer: "We handle everything from UI/UX and web design to brand identity, social media graphics, and pitch decks."
  },
  {
    question: "What tools do you use?",
    answer: "We primarily use Figma for design, and various other tools for animation, prototyping, and asset creation."
  }
]

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-black/5 last:border-0">
      <button 
        className="w-full py-8 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span className="text-xl md:text-2xl font-bold group-hover:text-muted-foreground transition-colors">
          {question}
        </span>
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-width mb-16">
        <p className="text-muted-foreground font-serif italic text-xl mb-4 text-center">FAQ</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-center">Your Questions, Answered</h2>
      </div>

      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-sm sticky top-32">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden mb-8">
                 <img src="https://i.pravatar.cc/100?img=11" alt="Joris" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Have more questions?</h3>
              <p className="text-muted-foreground mb-8">Book a free discovery call to learn more about how we work.</p>
              
              <button className="group w-full flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold shadow-lg">
                Book a Discovery Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Or email me at <a href="mailto:joris@hanzo.com" className="text-black font-bold">joris@hanzo.com</a>
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i}
                  {...faq}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
