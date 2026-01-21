import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";

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
  },
  {
    question: "Can I pause the subscription?",
    answer: "Yes, you can pause or cancel your subscription at any time. If you pause, the remaining days in your billing cycle will be held for future use."
  },
  {
    question: "Do you offer development too?",
    answer: "While we primarily focus on design, we can provide high-fidelity prototypes and work closely with your engineering team to ensure perfect implementation."
  }
];

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-black/10">
      <button 
        className="w-full py-6 md:py-8 lg:py-10 flex items-center justify-between text-left group transition-all"
        onClick={onClick}
      >
        <span className="text-base md:text-xl lg:text-[22px] font-medium text-black group-hover:text-[#777] transition-colors pr-6 md:pr-8">
          {question}
        </span>
        <div className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <Plus size={20} className="text-[#FF5500] md:w-6 md:h-6" strokeWidth={2.5} />
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
            <p className="pb-8 md:pb-10 text-base md:text-lg text-[#666] leading-relaxed max-w-2xl font-medium">
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
    <section id="faq" className="section-padding bg-transparent py-24 md:py-32 lg:py-48">
      {/* Header */}
      <div className="container-width text-center mb-16 md:mb-24 lg:mb-32 px-4">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
          <div className="w-12 h-px bg-linear-to-l from-black/30 to-transparent" />
          <p className="text-[#777] font-serif italic text-xl lg:text-2xl">FAQ</p>
          <div className="w-12 h-px bg-linear-to-r from-black/30 to-transparent" />
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
              className="w-full max-w-[520px] p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-white border-[6px] md:border-[8px] border-[#f0f0f0] shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:sticky lg:top-32 mx-auto lg:mx-0"
            >
              <div className="flex items-center lg:items-start gap-4 md:gap-5 mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                   <img 
                    src="https://framerusercontent.com/images/kE0M3vK0f0S1V0V1V0V1V0V1.png" 
                    alt="Joris" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://i.pravatar.cc/150?u=joris";
                    }}
                   />
                </div>
                <div className="pt-0 lg:pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-0.5 md:mb-1">Have more questions?</h3>
                  <p className="text-[#888] text-sm md:text-base font-medium leading-snug">Book a free discovery call</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Hero Style Button */}
                <button className="relative flex items-center p-1 md:p-2 overflow-hidden rounded-full bg-black/5 w-full">
                  <span className="group relative flex items-center justify-center gap-2 md:gap-3 w-full px-4 py-3 md:px-8 md:py-4 text-white font-bold bg-black rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
                    <span className="text-xs md:text-base">Book a Discovery Call</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 shrink-0"
                    />
                  </span>
                </button>
                
                <p className="text-center text-xs md:text-sm text-[#888] font-medium">
                  Or email me at <a href="mailto:joris@hanzo.com" className="text-black font-bold hover:text-[#FF5500] transition-colors">joris@hanzo.com</a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion (60%) */}
          <div className="w-full lg:flex-1 flex flex-col order-1 lg:order-2">
            <div className="border-t border-black/10">
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