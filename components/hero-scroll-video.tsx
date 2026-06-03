"use client"

import { useHeroScrollVideo } from "@/hooks/use-hero-scroll-video"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown } from "lucide-react"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type HeroScrollVideoProps = {
  introReady?: boolean
}

export function HeroScrollVideo({ introReady = false }: HeroScrollVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useHeroScrollVideo(canvasRef, wrapperRef, sectionRef, {
    enabled: introReady,
  })

  useEffect(() => {
    if (!introReady) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { filter: "brightness(0.7)" },
        { filter: "brightness(1)", duration: 1, ease: "power3.out" }
      )
      gsap.fromTo(
        ".hero-video-hint",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.4 }
      )
      gsap.to(".hero-video-hint", {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [introReady])

  return (
    <div ref={wrapperRef} className="hero-video-scroll-wrapper relative z-[2]">
      <section
        ref={sectionRef}
        className="hero-video-section relative h-[100svh] w-full overflow-hidden "
        aria-label="Intro animation"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 h-full w-full object-cover  object-center"
          
        />
        <div className="hero-video-hint pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-tertiary)] opacity-0">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={18} />
        </div>
      </section>
    </div>
  )
}
