"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ImportantProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 550)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-row",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const projects = [
    {
      id: "walletly",
      title: "Walletly",
      description:
        "AI-Powered Financial Management Platform for Personal Finance and Budgeting.",
      image: "/images/walletly/walletly1.png",
    },
    {
      id: "baladi",
      title: "Baladi",
      description:
        "SaaS-based municipality management platform with multi-tenant architecture.",
      image: "/images/baladi/baladi.jpeg",
    },
    {
      id: "others",
      title: "More Work",
      description:
        "Additional projects covering dashboards, APIs, business websites, and UI systems.",
      image: "/images/others.png",
    },
  ]

  return (
    <section 
      id="projects" 
      className={`relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-24 sm:py-32 border-t border-white/10 ${
        isMobile ? "bg-[var(--bg-secondary)]" : "bg-[#1a3a8a]"
      }`}
    >
      
      {/* Background Images Layer */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {projects.map((proj, idx) => {
            const isActive = activeIndex === idx
            return (
              <div 
                key={idx} 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={proj.image || "/placeholder.svg"}
                  alt={proj.title}
                  fill
                  className={`object-cover transition-transform duration-[15s] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            )
          })}
          {/* Dark Vignette Overlay for maximum contrast */}
          <div className="absolute inset-0 bg-[var(--bg-secondary)]/70  backdrop-blur-[4px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-secondary)]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-80" />
        </div>
      )}

      {/* Foreground Content */}
      <div className=" mx-auto px-4 sm:px-8  lg:px-14 xl:px-16 relative z-10 w-full" ref={containerRef}>
        <h2 className="text-[var(--accent-400)] font-mono tracking-[0.3em] uppercase text-sm mb-16 inline-block border border-[var(--accent-400)]/30 px-5 py-2 rounded-full bg-[var(--accent-400)]/10 backdrop-blur-md">
          Featured Work
        </h2>

        <div className="flex flex-col w-full border-t border-white/10" onMouseLeave={() => setActiveIndex(0)}>
          {projects.map((proj, idx) => {
            const isActive = activeIndex === idx

            return (
              <Link
                key={idx}
                href={`/projects/${proj.id}`}
                onMouseEnter={!isMobile ? () => setActiveIndex(idx) : undefined}
                className="project-row group relative py-10 lg:py-16 border-b sm:px-4 border-white/10 flex flex-col md:flex-row lg:items-center justify-between transition-colors duration-500 hover:border-white/40 hover:bg-white/[0.02]"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-16">
                  {/* Number */}
                  <span className={`font-mono text-xl lg:text-3xl transition-colors duration-500 ${
                    isActive || isMobile ? 'text-[var(--accent-400)]' : 'text-white/20'
                  }`}>
                    0{idx + 1}
                  </span>

                  {/* Title */}
                  <h3 
                    className="text-5xl sm:text-6xl md:text-5xl lg:text-[5rem] xl:text-[6rem] font-black uppercase tracking-tighter transition-all duration-500 leading-[0.85] m-0"
                    style={{
                      WebkitTextStroke: isActive || isMobile ? '0px transparent' : '1px rgba(255,255,255,0.2)',
                      color: isActive || isMobile ? 'white' : 'transparent',
                      textShadow: isActive || isMobile ? '0 0 60px rgba(255,255,255,0.3)' : 'none'
                    }}
                  >
                    {proj.title}
                  </h3>
                </div>

                {/* Inline Image on Mobile */}
                {isMobile && (
                  <div className="relative w-full aspect-[16/10] my-6 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <Image
                      src={proj.image || "/placeholder.svg"}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Animated Description & Button */}
                <div 
                  className={`mt-8 lg:mt-0 lg:max-w-md xl:max-w-lg transition-all duration-700 ease-out flex flex-col items-start md:items-end text-left md:text-right ${
                    isActive || isMobile ? 'opacity-100 lg:translate-x-0' : 'opacity-100 lg:opacity-0 lg:translate-x-12 pointer-events-auto lg:pointer-events-none'
                  }`}
                >
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[var(--text-primary)]/90 font-light mb-8 max-w-sm lg:max-w-none">
                    {proj.description}
                  </p>
                  
                  <div className="flex items-center gap-4 md:gap-2 lg:gap-4 text-[var(--accent-400)] font-mono uppercase tracking-widest text-sm group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-all duration-500">
                    <span className="font-bold">View Project</span>
                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-[var(--accent-400)]/30 flex items-center justify-center bg-[var(--accent-400)]/10 group-hover:bg-[var(--accent-400)] group-hover:text-black transition-all duration-500 group-hover:scale-110">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
