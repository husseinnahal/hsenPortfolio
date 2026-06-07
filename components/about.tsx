"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const PANELS = [
  {
    num: "01",
    label: "Profile",
    title: "Full-Stack Developer.",
    body: "I am aFull-Stack Developer passionate about transforming ideas into scalable web applications. I focus on creating fast, reliable, and user-centered solutions that solve real-world problems."
  },


  {
    num: "02",
    label: "Education",
    title: "Computer Science graduate.",
    body: "Islamic University of Lebanon — a strong foundation in  software engineering, algorithms, databases, and modern web development. I turn complex theoretical concepts into production-ready software.",
  },

  {
    num: "03",
    label: "What I Do",
    title: "End-to-End Development.",
    body: "Specialized in Next.js, React, Node.js, Express, and MongoDB, delivering full-stack solutions from UI design to backend systems, I deliver complete digital solutions.",
  },

]

export function About() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".about-card")
      
      cards.forEach((card, i) => {
        // Animate elements inside the card on enter
        const innerEls = card.querySelectorAll(".stagger-el")
        gsap.fromTo(innerEls, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            stagger: 0.1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
            }
          }
        )

        // Scale down effect when the NEXT card overlays this one
        if (i < cards.length - 1) {
          const cardInner = card.querySelector(".card-inner")
          ScrollTrigger.create({
            trigger: card,
            start: "top top", 
            end: "bottom top", 
            scrub: true,
            animation: gsap.to(cardInner, {
              scale: 0.85,
              opacity: 0.2,
              y: -50,
              ease: "none"
            })
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="about" className="relative w-full bg-gradient-to-b from-[var(--accent-300)] to-[var(--bg-primary)]  ">
      <div className="absolute top-[-80px] sm:top-[-100px] md:top-[-120px] lg:top-[-9%] left-[-10%] sm:left-[-5%] w-[110%] sm:w-[105%]  xl:w-[100%] xl:left-[0%] overflow-hidden   pointer-events-none z-[1]" >
        <div className="flex items-end w-full min-w-full justify-between pb-6 ">
          <Image
            src="/images/cloud.png"
            alt="Cloud"
            width={600}
            height={200}
            className="w-[57vw] h-[200px] sm:w-[48vw] sm:h-[200px] md:h-auto object-cover md:object-contain  relative z-[1] opacity-90 overflow-visible  translate-y-3 select-none"
          />
          <Image
            src="/images/cloud.png"
            alt="Cloud"
            width={700}
            height={250}
            className="w-[65vw] h-[180px] sm:w-[55vw] sm:h-[200px] md:h-auto object-cover  md:object-contain -ml-[20vw] relative z-[3] opacity-95 shrink-0  overflow-visible -translate-y-4 select-none"
          />
          <Image
            src="/images/cloud.png"
            alt="Cloud"
            width={600}
            height={200}
            className="w-[57vw] h-[200px] sm:w-[48vw] sm:h-[200px] md:h-auto object-cover md:object-contain -ml-[20vw] xl:-ml-[27vw] relative z-[1]  opacity-90 shrink-0 overflow-visible translate-y-5 select-none"
          />
        </div>
      </div>
      {/* Title that sticks behind the cards */}
      <div className="sticky top-0 h-[30vh] w-full flex items-end justify-center pb-12 z-[3] pointer-events-none bg-gradient-to-b from-transparent to-[var(--bg-primary)]">
         <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tighter drop-shadow-2xl">
            Who I <span className="text-transparent bg-clip-text text-accent-gradient">am</span>
         </h2>
      </div>

      <div className="relative z-10">
        {PANELS.map((panel, i) => (
          <div 
            key={i} 
            className="about-card sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden border-t-3 border-[#9fc3e0]"
            style={{ zIndex: i + 2 }}
          >
            {/* Opaque Background */}
            <div className="absolute inset-0 bg-[var(--bg-primary)] shadow-[0_-30px_60px_rgba(10,25,60,0.8)] ">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-400)]/5 via-transparent to-transparent" />
              
              {/* Top highlight border for clean overlap separation */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-400)]/40 to-transparent" />
              
              {/* Floating light orbs — alive background */}
              <div className="absolute top-[15%] left-[10%] w-[250px] h-[250px] bg-[var(--accent-400)]/10 rounded-full blur-[100px] animate-float pointer-events-none" />
              <div className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] bg-[var(--violet-400)]/8 rounded-full blur-[120px] animate-float-slow pointer-events-none" />
              <div className="absolute top-[60%] left-[50%] w-[200px] h-[200px] bg-white/[0.03] rounded-full blur-[80px] animate-float pointer-events-none" />
            </div>
            
            <div className="card-inner container relative z-10 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center max-w-6xl">
              
              {/* Glass Card with animated rotating gradient border */}
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#37a6ff] backdrop-blur-3xl p-8 sm:p-14 lg:p-20 transition-all duration-700 hover:scale-[1.020] hover:border-[var(--accent-400)]/30 shadow-[0_0_120px_rgba(42,79,160,0.25)] hover:shadow-[0_0_60px_rgba(245,158,11,0.30),0_0_140px_rgba(245,158,11,0.35)]">

                {/* animated background glow */}
                <div className="absolute inset-0 opacity-70 pointer-events-none">
                  
                  {/* moving gold light */}
                  <div className="absolute -top-32 -left-24 w-[320px] h-[320px] bg-yellow-400/10 blur-[120px] rounded-full animate-blob" />

                  {/* violet light */}
                  <div className="absolute bottom-[-120px] right-[-60px] w-[260px] h-[260px] bg-violet-500/10 blur-[110px] rounded-full animate-blob-slow" />

                  {/* blue cinematic glow */}
                  <div className="absolute top-[40%] left-[40%] w-[180px] h-[180px] bg-cyan-400/10 blur-[90px] rounded-full animate-pulse" />
                </div>

                {/* animated border light */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                  <div className="absolute inset-[-200%] animate-spin-slower bg-[conic-gradient(from_0deg,transparent,rgba(251,191,36,0.22),transparent,rgba(168,85,247,0.18),transparent)]" />
                  
                  <div className="absolute inset-[1px] rounded-[calc(2.5rem-1px)] bg-[#9fc3e0] backdrop-blur-3xl" />
                </div>

                {/* glass reflection */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute -left-[120%] top-0 h-full w-[40%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[140%] transition-all duration-[2200ms]" />
                </div>

                {/* top highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

                {/* bottom lighting */}
                <div className="absolute bottom-0 left-[10%] w-[80%] h-[120px] bg-yellow-400/5 blur-[90px] pointer-events-none" />

                {/* content */}
                <div className="relative z-10">                
                {/* Animated rotating gradient border */}
                {/* <div className="absolute inset-0 rounded-[2.5rem] p-[1px] overflow-hidden pointer-events-none">
                  <div 
                    className="absolute inset-[-50%] animate-spin-slow"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, rgba(100, 203, 244, 0.4), transparent, rgba(124,156,245,0.3), transparent, rgba(251,191,36,0.2), transparent)`
                    }}
                  />
                  <div className="absolute inset-[1px] rounded-[calc(2.5rem-1px)] bg-[#1c3c8c]/50 backdrop-blur-3xl" />
                </div> */}
                
                {/* Subtle light beam sweeping across the card */}
                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div 
                    className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-[2s] ease-out"
                  />
                </div>
                
                {/* Corner light flares */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[var(--accent-400)]/15 to-transparent rounded-tl-[2.5rem] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--violet-400)]/10 to-transparent rounded-br-[2.5rem] pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-24 items-start lg:items-center ">
                  <div className="flex-shrink-0 relative stagger-el">
                    {/* Pulsing glow behind the number */}
                    <div className="absolute -inset-10 bg-gradient-to-br from-white/50 to-white/70 blur-3xl rounded-full animate-pulse-glow pointer-events-none" />
                    <span 
                      className="relative text-8xl lg:text-[14rem] font-black font-mono leading-none tracking-tighter text-transparent transition-all duration-700"
                      style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)" }}
                    >
                      <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-b from-[var(--accent-300)] to-[var(--violet-400)] opacity-100 transition-opacity duration-700">
                        {panel.num}
                      </span>
                      {panel.num}
                    </span>
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <div className="mb-6 inline-flex items-center gap-4 stagger-el">
                      {/* Animated glowing accent line */}
                      <span className="text-lg inline-block animate-spin-slow text-[var(--accent-50)]" >
                        ✶
                      </span>    
                                              
                      <span className="text-sm lg:text-base font-mono text-[var(--accent-50)] tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
                        {panel.label}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight stagger-el drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                      {panel.title}
                    </h3>
                    
                    <p className="text-[var(--accent-50)] text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-3xl stagger-el">
                      {panel.body}
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  )
}
