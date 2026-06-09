"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

export function ProfessionalJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 550)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const experiences = [
    {
      period: "2022 — 2025",
      title: "Bachelors in Computer Science",
      subtitle: "Islamic University of Lebanon",
      company: "Education",
      description:
        "Built a strong foundation in software engineering, algorithms, databases, and modern web development technologies.",
    },
    {
      period: "2025",
      title: "Frontend Developer Intern",
      subtitle: "BrainKets • Hybrid Internship",
      company: "Internship",
      description:
        "Developed interactive dashboard features and an event management system using Next.js while collaborating with the team through Git and modern development workflows.",
    },
    {
      period: "2025 — Present",
      title: "Full-Stack Developer",
      subtitle: "Basma • Freelance",
      company: "Remote",
      description:
        "Developing scalable full-stack web applications using the MERN stack, including API integration, authentication systems, and optimized database architecture.",
    },
  ]

  useEffect(() => {
    if (isMobile) {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".experience-card")
        cards.forEach((card) => {
          const content = card.querySelector(".experience-content")
          if (content) {
            gsap.fromTo(content,
              { opacity: 0.3, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  end: "bottom 30%",
                  toggleActions: "play none none reverse",
                }
              }
            )
          }
        })
      }, sectionRef)
      return () => ctx.revert()
    }

    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const wrapper = wrapperRef.current

      if (!section || !wrapper) return

      const cards =
        gsap.utils.toArray<HTMLElement>(".experience-card")

      const getScrollAmount = () =>
        -(wrapper.scrollWidth - window.innerWidth)

      const getScrollDistance = () =>
        (wrapper.scrollWidth - window.innerWidth) * 2.5

      // Horizontal movement
      const tween = gsap.to(wrapper, {
        x: getScrollAmount,
        ease: "none",
      })

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      })

      // Timeline progress glow
      gsap.to(".timeline-glow-line", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,

          onUpdate: (self) => {
            const progress = self.progress
            const total = experiences.length

            const activeIndex = Math.min(
              total - 1,
              Math.floor(progress * total)
            )

            cards.forEach((card, index) => {
              const dot = card.querySelector(".experience-dot")
              const tick = card.querySelector(".experience-tick")
              const content =
                card.querySelector(".experience-content")

              if (
                !dot ||
                !tick ||
                !content
              )
                return

              if (index === activeIndex) {
                gsap.to(dot, {
                  borderColor: "#f59e0b",
                  boxShadow:
                    "0 0 25px rgba(245,158,11,0.9)",
                  scale: 1.25,
                  duration: 0.4,
                })

                gsap.to(tick, {
                  backgroundColor: "#f59e0b",
                  boxShadow:
                    "0 0 15px rgba(245,158,11,0.8)",
                  duration: 0.4,
                })

                gsap.to(content, {
                  opacity: 1,
                  y: 0,
                  duration: 0.4,
                })
              } else {
                gsap.to(dot, {
                  borderColor:
                    "rgba(255,255,255,0.3)",
                  boxShadow:
                    "0 0 0px rgba(0,0,0,0)",
                  scale: 1,
                  duration: 0.4,
                })

                gsap.to(tick, {
                  backgroundColor:
                    "rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 0 0px rgba(0,0,0,0)",
                  duration: 0.4,
                })

                gsap.to(content, {
                  opacity: 0.4,
                  y: 20,
                  duration: 0.4,
                })
              }
            })
          },
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className={`w-full flex flex-col justify-center overflow-hidden relative ${
        isMobile ? "h-auto py-24 min-h-screen" : "h-screen"
      }`}
      style={{ 
        backgroundImage:  isMobile ? "url('/images/land.webp')" :  "url('/images/land.gif')", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundAttachment: isMobile ? "scroll" : "fixed"  
      }}
    >
      {/* Background lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[0%] left-[0%] w-full h-full  bg-[black]/80 " />

        <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] rounded-full bg-[var(--accent-400)]/5 blur-[50px]" />

        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--accent-400)]/[0.03] blur-[50px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Title */}
      <div className={`absolute left-0 w-full px-6 sm:px-8 lg:px-20 z-10 pointer-events-none ${
        isMobile ? "top-8 pt-8" : "top-0 pt-20"
      }`}>
        <h2 className="text-3xl flex items-center gap-x-2 flex-wrap sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter drop-shadow-2xl text-[(var(--text-primary))] ">
          <span className="text-[35px] inline-block animate-spin-slow text-[var(--accent-50)]" >
             ✶
          </span>  
          Professional{" "}
          <span className="text-transparent bg-clip-text text-accent-gradient">
            Journey
          </span>
        </h2>
      </div>

      {/* Wrapper */}
      <div
        ref={wrapperRef}
        className={
          isMobile
            ? "flex flex-col gap-12 w-full max-w-2xl mx-auto px-6 relative pl-12 sm:pl-16 pb-12 pt-28"
            : "flex gap-12 w-max items-center h-full relative pl-[15vw] lg:pl-[20vw] pb-12"
        }
      >
        {/* Timeline line */}
        <div className={
          isMobile
            ? "absolute left-6 sm:left-10 top-28 bottom-12 w-[2px] bg-white/10 z-0"
            : "absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0 overflow-hidden"
        }>
          {!isMobile && (
            <div className="timeline-glow-line absolute top-0 left-0 h-full bg-[#ffa200] shadow-[0_0_20px_rgba(245,158,11,0.9)] w-0" />
          )}
          {isMobile && (
            <div className="absolute top-0 left-0 w-full h-full bg-[#ffa200]/30" />
          )}
        </div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={
              isMobile
                ? "experience-card w-full relative ml-0"
                : "experience-card w-[85vw] sm:w-[65vw] lg:w-[45vw] h-full flex-shrink-0 relative group ml-4"
            }
          >

            {/* Dot */}
            <div className={
              isMobile
                ? "experience-dot absolute left-[-31px] sm:left-[-35px] top-4 w-5 h-5 rounded-full bg-[#ffa200] border-[4px] border-[#07111f] z-10"
                : "experience-dot absolute top-[49%] left-[-10px] w-6 h-6 rounded-full bg-[var(--accent-200)] border-[4px] border-black/30 -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-500"
            } />

            {/* Tick */}
            {!isMobile && (
              <div className="experience-tick absolute left-0 top-1/2 w-[2px] h-8 bg-white/10 transition-all duration-500 z-0" />
            )}

            {/* Glow around active section */}
            <div className={
              isMobile
                ? "absolute left-[-20px] top-0 w-[150px] h-[150px] bg-[#f59e0b]/[0.05] blur-[40px] rounded-full pointer-events-none"
                : "absolute left-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#f59e0b]/[0.1] blur-[60px] rounded-full pointer-events-none"
            } />

            {/* Content */}
            <div className={
              isMobile
                ? "w-full"
                : "absolute left-0 top-[calc(50%+2.5rem)] w-[94%] sm:w-[90%] lg:w-[85%]"
            }>
              <div className={
                isMobile
                  ? "experience-content opacity-100 transition-all duration-700 ease-out"
                  : "experience-content opacity-40 translate-y-4 transition-all duration-700 ease-out"
              }>
                <span className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#ffa200] drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] block mb-2 sm:mb-4">
                  {exp.period}
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-4 text-[(var(--text-primary))]  tracking-tight">
                  {exp.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-sm sm:text-base lg:text-lg font-medium text-transparent bg-clip-text text-accent-gradient">
                    {exp.subtitle}
                  </span>

                  <span className="block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--text-tertiary)]" />

                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[var(--text-primary)]">
                    {exp.company}
                  </span>
                </div>

                <p className="text-xs sm:text-sm sm:text-base lg:text-lg text-[var(--text-primary)] font-light leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Ending space */}
        {!isMobile && (
          <div className="w-[15vw] lg:w-[20vw] h-full flex-shrink-0" />
        )}
      </div>
    </section>
  )
}