import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <div className="w-full max-w-7xl flex justify-between items-center pointer-events-auto">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          Hanzo
        </a>

        <div className="flex items-center gap-4">
          {/* Menu Button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-black/5 shadow-sm hover:scale-105 transition-transform">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}