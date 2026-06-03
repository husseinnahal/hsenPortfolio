"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on("scroll", ScrollTrigger.update)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const onPreloaderDone = () => lenis.start()
    const onPreloaderStart = () => lenis.stop()

    window.addEventListener("preloader-complete", onPreloaderDone)
    window.addEventListener("preloader-start", onPreloaderStart)
    lenis.stop()

    return () => {
      window.removeEventListener("preloader-complete", onPreloaderDone)
      window.removeEventListener("preloader-start", onPreloaderStart)
      gsap.ticker.remove(tick)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return <>{children}</>
}
