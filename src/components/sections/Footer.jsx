import { motion } from "framer-motion"
import { ArrowRight, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-32 bg-background">
      {/* Call to Action Section */}
      <div className="container mx-auto mb-1 h-100vh">
        <div className="relative px-12 pt-12 pb-1 overflow-hidden text-center bg-black rounded-4xl md:px-24 md:pb-1 md:pt-24">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <p className="mb-8 text-sm font-bold tracking-widest uppercase text-white/50">
              2 spots available
            </p>
            <h2 className="mb-12 text-5xl font-bold tracking-tight text-white md:text-8xl">
              Let's Connect
            </h2>
            <p className="max-w-xl mx-auto mb-16 text-lg leading-relaxed text-white/60 md:text-xl">
              Feel free to contact me if having any questions. I'm available for
              new projects or just for chatting.
            </p>

            <button className="flex items-center gap-3 px-10 py-5 mx-auto text-xl font-bold text-black transition-all bg-white rounded-full shadow-2xl group hover:scale-105">
              Book a free intro call
              <ArrowRight
                size={24}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="py-12 px-18">
            <div className="flex flex-col items-center justify-between gap-8 text-sm font-medium container-width md:flex-row text-muted-foreground">
              <div className="flex items-center gap-2 py-3 text-white border-y border-white/80">
                <span>© Hanzo Studio, 2026</span>
              </div>

              <div className="flex gap-4 text-white">
                <div className="flex items-center justify-center w-10 h-10 transition-all border rounded-full cursor-pointer border-white/80 hover:bg-white hover:text-black">
                  <Twitter size={16} />
                </div>
                <div className="flex items-center justify-center w-10 h-10 transition-all border rounded-full cursor-pointer border-white/80 hover:bg-white hover:text-black">
                  <Instagram size={16} />
                </div>
                <div className="flex items-center justify-center w-10 h-10 transition-all border rounded-full cursor-pointer border-white/80 hover:bg-white hover:text-black">
                  <Linkedin size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
