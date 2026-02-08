import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin } from "lucide-react"

const menuLinks = [
  { name: "Process", href: "#process" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const MenuIcon = ({ isOpen }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-5 h-5 overflow-hidden">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-5 h-[1px] bg-current rounded-full"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute w-5 h-[1px] bg-current rounded-full"
      />
    </div>
  );
};

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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-6 lg:px-18 pointer-events-none">
        <div className="w-full max-w-7xl flex justify-between items-center pointer-events-auto">
          {/* Logo with full round white bg */}
          <a 
            href="/" 
            className="flex items-center justify-center px-4 py-1.5 rounded-full bg-background border border-border shadow-sm"
          >
            <img src="/GlamRev-black-logo.webp" alt="GlamRev Logo" className="h-7 w-auto" />
          </a>

          <div className="flex items-center gap-4">
            {/* Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border shadow-sm cursor-pointer"
            >
              <MenuIcon isOpen={false} />
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
              className="fixed inset-0 z-60 bg-foreground/10 backdrop-blur-sm cursor-pointer"
            />

            {/* Menu Card */}
            <div className="fixed top-4 right-6 lg:right-18 z-70 flex flex-col items-end gap-4">
              {/* Close Button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background shadow-xl cursor-pointer"
              >
                <MenuIcon isOpen={true} />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-[calc(100vw-3rem)] min-[375px]:w-[320px] bg-background rounded-[2.5rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)] flex flex-col items-start gap-8"
              >
                <div className="flex flex-col gap-5 w-full">
                  {menuLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-medium text-foreground hover:text-brand transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  
                </div>

                <div className="flex gap-4 pt-4 border-t border-border w-full">
                  {[XIcon, Linkedin, Instagram].map((Icon, i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-center w-10 h-10 border border-border rounded-full cursor-pointer text-foreground hover:bg-foreground hover:text-background transition-all"
                    >
                      {typeof Icon === 'function' ? <Icon /> : <Icon size={16} strokeWidth={1.5} />}
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
