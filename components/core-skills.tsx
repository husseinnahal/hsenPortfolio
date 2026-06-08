"use client"
import { Gauge, Layers, Shield, Workflow } from "lucide-react"
import { useEffect, useState } from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

const skills = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "End-to-end web application development from frontend to backend.",
  },
  {
    icon: Shield,
    title: "Secure Applications",
    description: "Building secure, reliable systems with proper auth and data protection.",
  },
  {
    icon: Workflow,
    title: "API Development",
    description: "Designing and integrating efficient REST APIs and backend systems.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Improving speed, responsiveness, and overall application performance.",
  },
]

export function CoreSkills() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 650)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <section id="skills" className="py-25 px-4 bg-[var(--bg-secondary)]  relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--text-primary)]/5 blur-[50px] sm:blur-[80px] pointer-events-none"
        data-parallax="skills-glow"
      />
      <div className="container mx-auto relative z-10">
        <h2
          data-section-title
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 text-white"
        >
          Core <span className="text-accent-gradient">Skills</span>
        </h2>
        <div className="section-divider max-w-[200px] mx-auto " />

        {isMobile ? (
          <Swiper pagination={{ clickable: true }} spaceBetween={16} slidesPerView={1.2}>
            {skills.map((skill, index) => (
              <SwiperSlide key={index} style={{ height: "auto" }}>
                <div
                  className="gradient-border p-6 sm:p-8 rounded-2xl text-center flex flex-col h-full card-hover"
                  data-animate="skill-card"
                >
                  <div className="w-14 h-14  rounded-xl flex items-center justify-center mx-auto mb-4 ">
                    <skill.icon className="w-7 h-7 text-[var(--accent-400)]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 text-[var(--text-primary)]">{skill.title}</h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm flex-grow">{skill.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6  lg:gap-4 lx:gap-8 pt-4 ">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="gradient-border px-4 sm:px-6 md:px-4 py-6 rounded-2xl text-center card-hover group "
                data-animate="skill-card"
              >
                <div className="w-16 h-16  rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ">
                  <skill.icon className="w-8 h-8 text-[var(--accent-400)]" />
                </div>
                <h3 className="text-xl sm:text-lg lg:text-base xl:text-xl font-semibold mb-3 text-[var(--text-secondary)]">{skill.title}</h3>
                <p className="text-[var(--text-primary)] text-xs md:text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
