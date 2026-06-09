"use client"

import { About } from "@/components/about"
import { AboutMe } from "@/components/about-me"
import { CoreSkills } from "@/components/core-skills"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ImportantProjects } from "@/components/important-projects"
import { Preloader } from "@/components/preloader"
import { ProfessionalJourney } from "@/components/professional-journey"
import { ScrollAnimate } from "@/components/scroll-animate"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { Technologies } from "@/components/technologies"
import { useState } from "react"

export default function Home() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <SmoothScrollProvider>
      <Preloader onComplete={() => setIntroDone(true)} />
      <div className="relative min-h-screen text-[var(--text-primary)] grain-overlay" >
        <div className="relative z-[1]">
        <ScrollAnimate />
        <Header introReady={introDone} />
        <main>
          <Hero introReady={introDone} />
          <div className="relative z-10 bg-[var(--bg-primary)] shadow-[0_-20px_50px_rgba(26,58,138,0.8)]" style={{ marginTop: '-100vh' }}>
            <About />
            <CoreSkills />
            <ProfessionalJourney />
            <AboutMe />
            <Technologies />
            <ImportantProjects />
            <Footer />
          </div>
        </main>
        </div>
      </div>
    </SmoothScrollProvider>
  )
}
