import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Instagram, Linkedin } from "lucide-react"

const menuLinks = [
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const XIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className="w-4 h-4 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 lg:px-18 pointer-events-none">
        <div className="w-full max-w-7xl flex justify-between items-center pointer-events-auto">
          {/* Logo with full round white bg */}
          <a 
            href="/" 
            className="flex items-center justify-center px-6 py-2.5 rounded-full bg-white border border-black/5 shadow-sm text-xl font-bold tracking-tight text-black hover:scale-105 transition-transform"
          >
            Hanzo
          </a>

          <div className="flex items-center gap-4">
            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-black/5 shadow-sm hover:scale-105 transition-transform cursor-pointer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-60 bg-black/10 backdrop-blur-sm cursor-pointer"
            />

            {/* Menu Card */}
            <div className="fixed top-6 right-6 lg:right-18 z-70 flex flex-col items-end gap-4">
              {/* Close Button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-xl hover:scale-105 transition-transform cursor-pointer"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-[320px] bg-white rounded-[2.5rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)] flex flex-col items-start gap-8"
              >
                <div className="flex flex-col gap-5 w-full">
                  {menuLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-medium text-black hover:text-[#FF5500] transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#template"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-bold text-[#FF5500] hover:scale-105 transition-transform origin-left"
                  >
                    Get Template
                  </a>
                </div>

                <div className="flex gap-4 pt-4 border-t border-black/5 w-full">
                  {[XIcon, Linkedin, Instagram].map((Icon, i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-center w-12 h-12 border border-black/10 rounded-full cursor-pointer text-black hover:bg-black hover:text-white transition-all"
                    >
                      {typeof Icon === 'function' ? <Icon /> : <Icon size={18} strokeWidth={1.5} />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
