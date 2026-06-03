"use client"

import { useEffect, useRef } from "react"

const STAR_IMAGE = "/images/stars1.png"
function getParticleCount() {
  if (typeof window === "undefined") return 120
  return window.innerWidth < 640 ? 70 : window.innerWidth < 1024 ? 100 : 140
}

type Snowflake = {
  x: number
  y: number
  size: number
  speed: number
  wind: number
  opacity: number
  wobble: number
  wobbleSpeed: number
  rotation: number
  spin: number
}

function createFlake(width: number, height: number): Snowflake {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 1 + Math.random() * 2.8,
    speed: 0.35 + Math.random() * 1.1,
    wind: (Math.random() - 0.5) * 0.35,
    opacity: 0.25 + Math.random() * 0.75,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.008 + Math.random() * 0.02,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.02,
  }
}

export function AnimatedStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const flakesRef = useRef<Snowflake[]>([])
  const windRef = useRef(0)
  const rafRef = useRef<number>(0)
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.src = STAR_IMAGE
    imageRef.current = img

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initFlakes = () => {
      flakesRef.current = Array.from({ length: getParticleCount() }, () =>
        createFlake(window.innerWidth, window.innerHeight)
      )
    }

    const onMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      windRef.current += (nx * 0.6 - windRef.current) * 0.05
    }

    const animate = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const flakes = flakesRef.current
      const texture = imageRef.current
      const ready = texture?.complete && texture.naturalWidth > 0

      ctx.clearRect(0, 0, w, h)

      for (const flake of flakes) {
        flake.wobble += flake.wobbleSpeed
        flake.y += flake.speed
        flake.x += flake.wind + windRef.current + Math.sin(flake.wobble) * 0.4
        flake.rotation += flake.spin

        if (flake.y > h + 8) {
          flake.y = -6
          flake.x = Math.random() * w
        }
        if (flake.x > w + 8) flake.x = -4
        if (flake.x < -8) flake.x = w + 4

        const s = flake.size

        ctx.save()
        ctx.globalAlpha = flake.opacity
        ctx.translate(flake.x, flake.y)
        ctx.rotate(flake.rotation)

        if (ready && texture) {
          ctx.drawImage(texture, -s, -s, s * 2, s * 2)
        } else {
          ctx.fillStyle = flake.opacity > 0.5 ? "#e2e8f0" : "#94a3b8"
          ctx.beginPath()
          ctx.arc(0, 0, s, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    setSize()
    initFlakes()
    img.onload = () => {}
    window.addEventListener("resize", () => {
      setSize()
      initFlakes()
    })
    window.addEventListener("mousemove", onMouseMove, { passive: true })

    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", setSize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div
      className="stars-snow fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Deep space base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #1e293b 0%, var(--bg-primary) 55%, #050810 100%)",
        }}
      />
      {/* Faint static star field */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${STAR_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--bg-primary)_88%)]" />
    </div>
  )
}
