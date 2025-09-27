import { About } from "@/components/about"
import { CoreSkills } from "@/components/core-skills"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ImportantProjects } from "@/components/important-projects"
import { ProfessionalJourney } from "@/components/professional-journey"
import { ScrollAnimate } from "@/components/scroll-animate"
import { Technologies } from "@/components/technologies"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{overflow:"hidden"}}>
      <ScrollAnimate />
      <Header />
      <main>
        <Hero />
        <About/>
        <CoreSkills />
        <Technologies />
        <ProfessionalJourney />
        <ImportantProjects />
      </main>
      <Footer />
    </div>
  )
}
