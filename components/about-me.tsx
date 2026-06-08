"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // Calculate rotation angles (max 10 degrees)
    const rotateX = -(y / (rect.height / 2)) * 10
    const rotateY = (x / (rect.width / 2)) * 10
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger elements fade-in when scrolling into view
      gsap.fromTo(
        ".about-me-stagger",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about-me"
      className="relative w-full py-24 px-4 overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]"
    >
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-[var(--accent-500)]/5 rounded-full blur-[30px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-[var(--violet-500)]/5 rounded-full blur-[40px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: 3D PHOTO CARD */}
          <div className="lg:col-span-5 flex justify-center about-me-stagger">
            <div
              className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] group cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                transition: "transform 0.15s ease-out",
              }}
            >
              {/* Pulsing Backlight */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent-500)] to-[var(--violet-500)] opacity-20 blur-xl rounded-[2rem] group-hover:opacity-35 transition-opacity duration-700 pointer-events-none" />

              {/* Animated Rotating Border */}
              <div className="absolute inset-0 rounded-[2rem] p-[1px] overflow-hidden bg-white/10 group-hover:bg-white/20 transition-colors duration-500">
                <div className="absolute inset-[-200%] animate-spin-slower bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.4),transparent,rgba(165,180,252,0.3),transparent)] pointer-events-none" />
                
                {/* Photo frame glass overlay */}
                <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-[#9fc3e0]/30  overflow-hidden">
                  
                  {/* The Image */}
                  <Image
                    src="/images/hussein-photo.jpg"
                    alt="Hussein Nahhal"
                    fill
                    sizes="(max-width: 768px) 300px, 340px"
                    priority
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  />

                  {/* Corner light flares */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Decorative Corner Ticks */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-500)] rounded-tl-sm" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-500)] rounded-tr-sm" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-500)] rounded-bl-sm" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-500)] rounded-br-sm" />
            </div>
          </div>

          {/* RIGHT COLUMN: BIO CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-3 mb-6 about-me-stagger">
              <span className="text-lg animate-spin-slow text-[var(--accent-500)]">✶</span>
              <span className="text-sm font-mono tracking-[0.25em] uppercase text-[var(--accent-600)] font-bold">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-8 leading-[1.15] about-me-stagger">
               <span className="text-transparent bg-clip-text text-accent-gradient"> Full-Stack Developer </span>
               & Software Craftsman.
            </h2>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] font-light about-me-stagger">
              <p>
                I build high-performance, secure, and scalable web applications with a focus on clean architecture and user experience. My Computer Science background allows me to connect solid engineering principles with modern UI development.

              </p>
              <p>
                I work across the full stack — from designing APIs and database structures to building responsive, interactive interfaces ready for production.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
