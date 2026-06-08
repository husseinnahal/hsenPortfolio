"use client"

import { HeroCinematicIntro } from "@/components/hero-cinematic-intro"
import { useMousePosition } from "@/hooks/use-mouse-position"
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

type HeroProps = {
  introReady?: boolean
}

function HeroContent({ introReady = false }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const { x, y } = useMousePosition()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (imageRef.current) {
      const rotateX = y * -8
      const rotateY = x * 12
      imageRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${50 + x * 25}% ${50 + y * 25}%, rgba(34,211,238,0.14), transparent 70%)`
    }
  }, [x, y])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-bg-text",
        { xPercent: -10 },
        {
          xPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      )

      gsap.to(".hero-layer-back", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      })

      gsap.to(".hero-layer-front", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!introReady) return

    const ctx = gsap.context(() => {
      gsap.set([".hero-content-block > *", ".hero-image-wrap", ".hero-marquee", ".hero-scroll-hint"], {
        autoAlpha: 0,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      tl.fromTo(
        ".hero-layer-back",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.8, stagger: 0.05, ease: "power2.out" }
      )
        .fromTo(
          ".hero-content-block > *",
          { autoAlpha: 0, y: 60, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          ".hero-image-wrap",
          { autoAlpha: 0, x: 80, scale: 0.9, rotateY: 20 },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .fromTo(
          ".hero-marquee",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-scroll-hint",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )

      gsap.to(".hero-scroll-hint", {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [introReady])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-section relative z-[1] flex min-h-[100svh] items-center overflow-hidden bg-[var(--bg-primary)] px-2 sm:px-4"
      data-hero
    >
      <div
        ref={spotlightRef}
        className="hero-layer-back pointer-events-none absolute inset-0 z-[1] transition-[background] duration-200"
      />

      <div
        className="hero-layer-back absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${x * -12}px, ${y * -12}px)`,
        }}
      />

      <div className="hero-bg-text pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap">
        <span className="text-[clamp(4rem,18vw,14rem)] font-black uppercase tracking-tighter text-white/[0.03]">
          Full Stack
        </span>
      </div>

      <div
        className="hero-layer-back absolute top-[20%] left-[15%] h-64 w-64 rounded-full bg-[var(--accent-400)]/5 "
        style={{ transform: `translate(${x * 30}px, ${y * 30}px)` }}
      />
      <div
        className="hero-layer-back absolute bottom-[25%] right-[10%] h-80 w-80 rounded-full bg-[var(--violet-500)]/10 "
        style={{ transform: `translate(${x * -20}px, ${y * -20}px)` }}
      />

      <div className="hero-layer-front container relative z-10 mx-auto px-4 pb-20 pt-28 sm:px-6 lg:pt-32">
        <div className="grid min-h-[calc(100svh-8rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="hero-content-block order-2 text-center lg:order-1 lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] opacity-0">
              <span className="glow-dot" />
              <span>Available for opportunities</span>
            </p>

            <p className="mb-3 font-mono text-sm tracking-wider text-[var(--accent-400)] opacity-0 sm:text-base">
              Hi, my name is
            </p>

            <h1 className="mb-2 text-3xl font-bold leading-[1.05] opacity-0 sm:text-4xl lg:text-6xl">
              <span className="text-white">Hussein</span>
              <span className="text-accent-gradient"> Nahal</span>
            </h1>

            <div className="mb-6 h-10 overflow-hidden opacity-0 sm:h-12">
              <p
                key={roleIndex}
                className="animate-fade-in-up text-lg text-[var(--text-secondary)] sm:text-2xl"
              >
                I build{" "}
                <span className="font-medium text-white">{ROLES[roleIndex]}</span>
              </p>
            </div>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] opacity-0 sm:text-lg lg:mx-0">
              Computer Science graduate crafting scalable web applications — polished
              interfaces, robust APIs, and production-ready architecture.
            </p>

            <div className="mb-8 flex items-center justify-center gap-4 opacity-0 lg:justify-start">
              <a href="#projects" className="btn-shimmer rounded-lg px-4 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base">
                View Projects
              </a>
              <a
                href="/images/HusseinNahal–FullStackDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[var(--border-accent)] px-4 py-3 text-sm text-white transition-all duration-300 hover:border-[var(--accent-400)] hover:bg-white/5 sm:px-8 sm:py-3.5 sm:text-base"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center gap-5 opacity-0 lg:justify-start">
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
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] hover:text-[var(--accent-400)]"
                  aria-label={label}
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="hero-image-wrap order-1 flex justify-center opacity-0 perspective-1000 lg:order-2">
            <div
              ref={imageRef}
              className="relative preserve-3d transition-transform duration-200 ease-out will-change-transform"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--accent-400)]/20 via-transparent to-[var(--accent-400)]/10 " />
              <div className="gradient-border relative rounded-[1.75rem] p-[2px]">
                <div className="relative aspect-[4/5] w-[min(100%,320px)] overflow-hidden rounded-[1.65rem] bg-[var(--bg-card)] sm:w-[360px]">
                  <Image
                    src="/images/hussein-photo.jpg"
                    alt="Hussein Nahal - Full Stack Developer"
                    width={360}
                    height={450}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="glass-strong absolute bottom-0 left-0 right-0 rounded-b-[1.65rem] p-5">
                    <p className="mb-1 font-mono text-xs uppercase tracking-widest text-[var(--accent-400)]">
                      MERN Stack
                    </p>
                    <p className="font-semibold text-white">Building for the web</p>
                  </div>
                </div>
              </div>
              <div
                className="animate-spin-slow absolute -z-10 inset-[-20px] rounded-[2.5rem] border border-[var(--accent-400)]/20"
                style={{ transform: `rotateX(${y * 5}deg) rotateY(${x * 5}deg)` }}
              />
            </div>
          </div>
        </div>

        <div className="hero-marquee hero-layer-front mt-12 overflow-hidden border-t border-white/5 pt-8 opacity-0">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex shrink-0 gap-12">
                {["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind", "PostgreSQL", "GSAP"].map(
                  (tech) => (
                    <span
                      key={`${dup}-${tech}`}
                      className="font-mono text-sm uppercase tracking-[0.2em] text-white/25"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll-hint absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-primary)] opacity-0 transition-colors hover:text-[var(--accent-400)]"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={18} />
      </a>
    </section>
  )
}

export function Hero({ introReady = false }: HeroProps) {
  return (
    <>
      <HeroCinematicIntro introReady={introReady} />
      {/* <HeroContent introReady={introReady} /> */}
    </>
  )
}
