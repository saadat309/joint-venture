import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { ProjectCTA } from "./components/sections/ProjectCTA"
import { Intro } from "./components/sections/Intro"
import { Process } from "./components/sections/Process"
import { CaseStudies } from "./components/sections/CaseStudies"
import { Pricing } from "./components/sections/Pricing"
import { FAQ } from "./components/sections/FAQ"
import { Footer } from "./components/sections/Footer"

function App() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <ProjectCTA />
      <Intro />
      <Process />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App