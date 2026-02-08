import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, MoveRight } from "lucide-react";

const faqs = [
  {
    question: "What specific services does GlamRev AI provide?",
    answer: "We specialize in cinematic AI filmmaking, hyper-realistic AI product photography, full-stack AI application development, and AI-driven automation workflows."
  },
  {
    question: "How do you ensure consistency in AI filmmaking?",
    answer: "Our experts use advanced neural network workflows to maintain frame-to-frame consistency, mastering camera angles and lighting to create professional-grade cinematic narratives."
  },
  {
    question: "What exactly is 'vibe coding'?",
    answer: "Vibe coding is our approach to harmonizing natural language with functional code. It allows us to build intuitive, aesthetic-first digital products that match your brand's exact vision with incredible speed."
  },
  {
    question: "How fast is the turnaround for AI projects?",
    answer: "Most AI-driven designs and product synthesis are completed within 2-3 business days. Complex cinematic productions are significantly faster than traditional filmmaking methods."
  },
  {
    question: "Do you offer full-stack web development?",
    answer: "Yes. Our team builds robust, scalable web and mobile applications integrated with the latest LLMs and automation agents, ensuring your brand stays at the forefront of tech."
  },
  {
    question: "Is the AI-generated content high-fidelity?",
    answer: "Absolutely. We specialize in photorealistic visual design and high-fidelity Photoshop AI integration, ensuring every asset meets premium production standards."
  },
  {
    question: "How do we get started on a project?",
    answer: "The easiest way is to message us on WhatsApp. We'll discuss your vision, map out the creative strategy, and move directly into production."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-border">
      <button 
        className="w-full py-6 md:py-8 lg:py-10 flex items-center justify-between text-left group transition-all"
        onClick={onClick}
      >
        <span className="text-base md:text-xl lg:text-[22px] font-medium text-foreground group-hover:text-muted-foreground transition-colors pr-6 md:pr-8">
          {question}
        </span>
        <div className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <Plus size={20} className="text-brand md:w-6 md:h-6" strokeWidth={2.5} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 md:pb-10 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="section-padding bg-transparent py-12 md:py-16 lg:py-24">
      {/* Header */}
      <div className="container-width text-center mb-16 md:mb-24 lg:mb-32 px-4">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
          <div className="w-12 h-px bg-linear-to-l from-foreground/30 to-transparent" />
          <p className="text-muted-foreground font-serif italic text-xl lg:text-2xl">FAQ</p>
          <div className="w-12 h-px bg-linear-to-r from-foreground/30 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-balance">
          Your Questions, Answered
        </h2>
      </div>

      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          {/* Left Side: CTA Card (45%) */}
          <div className="w-full lg:w-[45%] flex justify-start items-start order-2 lg:order-1">
            <motion.div 
              initial={{ rotate: -1, opacity: 0, x: -10 }}
              whileInView={{ rotate: -2, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[520px] p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-background border-[6px] md:border-[8px] border-border shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:sticky lg:top-32 mx-auto lg:mx-0"
            >
              <div className="flex items-center lg:items-start gap-4 md:gap-5 mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 border-2 border-background shadow-sm">
                   <img 
                    src="/profile.webp" 
                    alt="Anas Khan" 
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      e.target.src = "https://i.pravatar.cc/150?u=anas";
                    }}
                   />
                </div>
                <div className="pt-0 lg:pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-0.5 md:mb-1">Have more questions?</h3>
                  <p className="text-muted-foreground text-sm md:text-base font-medium leading-snug">Connect on WhatsApp</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Hero Style Button */}
                <a 
                  href="https://wa.me/923219900724" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative flex items-center p-1 md:p-2 overflow-hidden rounded-full bg-foreground/5 w-full"
                >
                  <motion.span className="group relative flex items-center justify-center gap-2 md:gap-3 w-full px-4 py-3 md:px-8 md:py-4 text-background font-bold bg-foreground rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.1)]" whileHover="hover">
                    <span className="text-xs md:text-base">Ask on WhatsApp</span>
                    <div className="relative flex items-center shrink-0">
                      <MoveRight
                        size={16}
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
                        <MoveRight size={16} />
                      </motion.div>
                    </div>
                  </motion.span>
                </a>
                
                <p className="text-center text-xs md:text-sm text-muted-foreground font-medium">
                  Or email me at <a href="mailto:glamrevofficial@gmail.com" className="text-foreground font-bold hover:text-brand transition-colors">glamrevofficial@gmail.com</a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion (60%) */}
          <div className="w-full lg:flex-1 flex flex-col order-1 lg:order-2">
            <div className="border-t border-border">
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
  );
}