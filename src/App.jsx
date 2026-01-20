import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { ProjectCTA } from "./components/sections/ProjectCTA"
import { Intro } from "./components/sections/Intro"
import { Process } from "./components/sections/Process"
import { Reviews } from "./components/sections/Reviews"
import { CaseStudies } from "./components/sections/CaseStudies"
import { Profile } from "./components/sections/Profile"
import { Pricing } from "./components/sections/Pricing"
import { FAQ } from "./components/sections/FAQ"
import { Footer } from "./components/sections/Footer"

function App() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white relative">
      <Navbar />
      <Hero />
      <ProjectCTA />
      <Intro />
      <Process />
      <Reviews />
      <CaseStudies />
      <Profile />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App