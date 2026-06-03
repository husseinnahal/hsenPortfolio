"use client"

import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

type HeaderProps = {
  introReady?: boolean
}

export function Header({ introReady = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!introReady) {
      gsap.set("header.site-header", { y: -100, autoAlpha: 0 })
      return
    }
    gsap.fromTo(
      "header.site-header",
      { y: -100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", delay: 0.15 }
    )
  }, [introReady])

  return (
    <header
      className={`site-header absolute top-0 left-0 right-0 z-50 transition-all duration-500 opacity-0 ${
        scrolled ? "bg-white/50  py-3 shadow-lg" : "bg-black/40 py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="/#home" className="text-lg sm:text-xl font-bold tracking-tight">
            <span className="text-accent-gradient">HN</span>
            <span className="text-white/90 hidden sm:inline"> / Hussein</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[var(--text-primary)] hover:text-[var(--accent-400)] transition-colors hover-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/images/HusseinNahal–FullStackDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="btn-shimmer border-0 font-semibold">Resume</Button>
          </a>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 glass rounded-xl p-4 bg-black/40 border border-white/5">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[var(--accent-700)] hover:text-[var(--accent-900)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/images/HusseinNahal–FullStackDeveloper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-shimmer w-fit font-semibold">Resume</Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
