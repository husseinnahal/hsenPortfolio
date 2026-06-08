"use client"

import { useCinematicIntroScroll } from "@/hooks/use-cinematic-intro-scroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)

const ROLES = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "API & Database Architect",
  "UI/UX Craftsperson",
]

type HeroCinematicIntroProps = {
  introReady?: boolean
}

export function HeroCinematicIntro({ introReady = false }: HeroCinematicIntroProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const roomRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const copyTlRef = useRef<gsap.core.Timeline | null>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    if (!introReady || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(".hero-cinematic-copy", {
        autoAlpha: 0,
        pointerEvents: "none",
        visibility: "hidden",
      })
      gsap.set(".hero-cinematic-copy-panel", { x: 120 })
      gsap.set(".hero-cinematic-copy-item", { autoAlpha: 0 })
      gsap.set(".hero-cinematic-copy-item--social a", { autoAlpha: 1 })

      copyTlRef.current = gsap
        .timeline({ paused: true, defaults: { ease: "none" } })
        .to(".hero-cinematic-copy-panel", { x: 0, duration: 1 })
        .fromTo(
          ".hero-cinematic-copy-item--name",
          { scale: 0.88, autoAlpha: 0, filter: "blur(10px)" },
          { scale: 1, autoAlpha: 1, filter: "blur(0px)", duration: 0.65 },
          "-=0.35"
        )
        .fromTo(
          ".hero-cinematic-copy-item--role",
          { clipPath: "inset(0 100% 0 0)", autoAlpha: 1 },
          { clipPath: "inset(0 0% 0 0)", duration: 0.6 },
          "-=0.45"
        )
        .fromTo(
          ".hero-cinematic-copy-item--desc",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55 },
          "-=0.35"
        )
        .fromTo(
          ".hero-cinematic-copy-item--cta",
          { scale: 0.8, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.45 },
          "-=0.3"
        )
        .fromTo(
          ".hero-cinematic-copy-item--social",
          { y: 16, autoAlpha: 0, rotation: -12 },
          { y: 0, autoAlpha: 1, rotation: 0, duration: 0.45, stagger: 0.08 },
          "-=0.25"
        )
    }, sectionRef)

    return () => {
      copyTlRef.current?.kill()
      copyTlRef.current = null
      ctx.revert()
    }
  }, [introReady])

  useCinematicIntroScroll(canvasRef, roomRef, wrapperRef, sectionRef, {
    enabled: introReady,
    copyTimelineRef: copyTlRef,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!introReady) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-cinematic-hint",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.35 }
      )
      gsap.to(".hero-cinematic-hint", {
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
    <div ref={wrapperRef} className="hero-cinematic-wrapper relative z-[0]" style={{ height: '700vh' }}>
      <section
        ref={sectionRef}
        className="hero-cinematic-section sticky top-0 h-[100svh] w-full overflow-hidden"
        aria-label="Room intro and scroll video"
      >
        <canvas
          ref={canvasRef}
          className="hero-video-canvas pointer-events-none absolute inset-0 z-[1] h-full w-full"
          aria-hidden
        />

        <div
          ref={roomRef}
          className="hero-room-layer pointer-events-none absolute inset-0 overflow-hidden z-[2] flex items-center justify-center"
        >
          <Image
            src="/images/room.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover sm:object-fill  object-center w-full h-full"
            aria-hidden
          />
        </div>

        <div className="hero-cinematic-copy  absolute  top-1/2 z-[1]  w-[92%] -translate-y-1/2 left-[4%] sm:left-auto sm:right-6  md:right-8 sm:w-[64%]    lg:right-12 md:w-[55%] lg:w-[45%]">
          <div className="hero-cinematic-copy-panel rounded-2xl border border-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl  sm:p-6">
            <p className="mb-3 inline-flex items-center gap-2 text-xs text-[#ffffffff] md:text-sm">
              <span className="glow-dot" />
              <span>Available for opportunities</span>
            </p>

            <p className="mb-2 font-mono text-xs tracking-wider text-[var(--accent-600)] sm:text-sm">
              Hi, my name is
            </p>

            <h2 className="hero-cinematic-copy-item hero-cinematic-copy-item--name mb-2 text-3xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              <span className="text-white">Hussein</span>
              <span className="text-accent-gradient"> Nahal</span>
            </h2>

            <div className="hero-cinematic-copy-item hero-cinematic-copy-item--role mb-3 h-8 overflow-hidden sm:h-9">
              <p className="text-sm text-[var(--accent-50)] sm:text-base">
                I build{" "}
                <span key={roleIndex} className="animate-fade-in-up font-medium text-white">
                  {ROLES[roleIndex]}
                </span>
              </p>
            </div>

            <p className="hero-cinematic-copy-item hero-cinematic-copy-item--desc mx-auto mb-8 max-w-xl text-sm  lg:text-base leading-relaxed text-[#fffffff5]  lg:mx-0">
              Computer Science graduate crafting scalable web applications — polished
              interfaces, robust APIs, and production-ready architecture.
            </p>

            <div className="hero-cinematic-copy-item hero-cinematic-copy-item--cta mb-6 md:mb-8 flex  items-center justify-center gap-4 sm:justify-start">
              <a
                href="#projects"
                className="btn-shimmer rounded-lg px-3 sm:px-4 py-3 text-xs sm:text-sm text-[var(--accent-400)]  lg:px-8 lg:py-3.5 lg:text-base"
              >
                View Projects
              </a>
              <a
                href="/images/HusseinNahal–FullStackDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border sm:border-[#0a0f1a] bg-white/30 px-3 sm:px-4 py-3 text-xs sm:text-sm text-[var(--accent-400)] sm:text-[#0a0f1a] transition-all duration-300 border-[var(--accent-400)] hover:bg-white/5   lg:px-8 lg:py-3.5  lg:text-base"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-cinematic-copy-item hero-cinematic-copy-item--social a flex items-center justify-center gap-5 sm:justify-start">
              {[
                { href: "https://github.com/husseinnahal", icon: Github, label: "GitHub" },
                {
                  href: "https://www.linkedin.com/in/hussein-nahal-2011a2343",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: "mailto:nahalhusssein1000@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 md:h-11 md:w-11 items-center justify-center rounded-full bg-white text-[var(--accent-400)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] hover:text-[var(--accent-600)]"
                  aria-label={label}
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-cinematic-hint pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={18} />
        </div>
      </section>
    </div>
  )
}
