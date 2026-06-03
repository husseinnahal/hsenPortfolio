"use client"

import { useEffect, useState } from "react"

type PreloaderProps = {
  onComplete: () => void
}

const isServer = typeof window === "undefined"
let preloaderHasRun = false

export function Preloader({ onComplete }: PreloaderProps) {
  const [bgState, setBgState] = useState<"initial" | "enter" | "exit">("initial")
  const [textState, setTextState] = useState<"initial" | "enter" | "exit">("initial")
  const [visible, setVisible] = useState(() => {
    if (isServer) return true
    return !preloaderHasRun
  })

  useEffect(() => {
    if (preloaderHasRun) {
      onComplete()
      return
    }

    document.body.style.overflow = "hidden"

    // Step 1: Slide panels down immediately
    const startBg = setTimeout(() => {
      setBgState("enter")
    }, 50)

    // Step 2: Fade & slide text in
    const startText = setTimeout(() => {
      setTextState("enter")
    }, 750)

    // Step 3: Fade & slide text out
    const exitText = setTimeout(() => {
      setTextState("exit")
    }, 2350)

    // Step 4: Split panels (left panel goes left, right panel goes right)
    const exitBg = setTimeout(() => {
      setBgState("exit")
    }, 2650)

    // Step 5: Complete preloader
    const finish = setTimeout(() => {
      setVisible(false)
      preloaderHasRun = true
      document.body.style.overflow = ""
      onComplete()
    }, 3550)

    return () => {
      clearTimeout(startBg)
      clearTimeout(startText)
      clearTimeout(exitText)
      clearTimeout(exitBg)
      clearTimeout(finish)
      document.body.style.overflow = ""
    }
  }, [onComplete])

  if (!visible) return null

  // Map background states to classes
  const leftPanelClass =
    bgState === "initial"
      ? "-translate-y-full"
      : bgState === "enter"
      ? "translate-y-0 translate-x-0"
      : "-translate-x-full"

  const rightPanelClass =
    bgState === "initial"
      ? "-translate-y-full"
      : bgState === "enter"
      ? "translate-y-0 translate-x-0"
      : "translate-x-full"

  // Map text states to classes
  const textClass =
    textState === "initial"
      ? "opacity-0 translate-y-8"
      : textState === "enter"
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-8"

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden select-none">
      
      {/* LEFT PANEL */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-[var(--accent-600)] via-[var(--accent-800)] to-[var(--accent-900)]  transition-transform duration-[900ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${leftPanelClass}`}
      >
        {/* Horizontal half line */}
        {/* <div className="absolute top-1/2 right-0 w-full h-[1px] bg-white/10" /> */}
      </div>

      {/* RIGHT PANEL */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[var(--accent-600)] via-[var(--accent-800)] to-[var(--accent-900)]  transition-transform duration-[900ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${rightPanelClass}`}
      >
        {/* Horizontal half line */}
        {/* <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" /> */}
      </div>

      {/* TYPOGRAPHY OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        
        <h1 className="text-4xl sm:text-6xl md:text-6xl font-black tracking-[-0.05em] text-white flex flex-row gap-x-4 items-center overflow-hidden pointer-events-none">
          <span
            className={`transition-all duration-[650ms] cubic-bezier(0.25,1,0.5,1) ${textClass}`}
            style={{ transitionDelay: textState === "enter" ? "0ms" : "50ms" }}
          >
            Hussein
          </span>
          <span
            className={`transition-all duration-[650ms] cubic-bezier(0.25,1,0.5,1) ${textClass}`}
            style={{ transitionDelay: textState === "enter" ? "150ms" : "0ms" }}
          >
            Nahal
          </span>
        </h1>

        <p
          className={`mt-4 text-xs sm:text-sm uppercase tracking-[0.45em] text-white/60 transition-all duration-[650ms] ease-out ${
            textState === "enter" ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: textState === "enter" ? "300ms" : "0ms" }}
        >
          Full Stack Developer
        </p>

        {/* Underline separator */}
        <div
          className={`mt-6 h-[1px] bg-white/30 transition-all duration-[750ms] ease-out ${
            textState === "enter" ? "w-[240px] opacity-100" : "w-0 opacity-0"
          }`}
          style={{ transitionDelay: textState === "enter" ? "400ms" : "0ms" }}
        />

      </div>

    </div>
  )
}