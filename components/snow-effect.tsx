"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: string
  size: string
  duration: string
  delay: string
  opacity: number
}

export function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    // Generate 45 snowflakes with randomized properties
    const flakes: Snowflake[] = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2}px`, // between 2px and 5px
      duration: `${Math.random() * 15 + 10}s`, // slow fall: between 10s and 25s
      delay: `${Math.random() * -25}s`, // start scattered
      opacity: Math.random() * 0.6 + 0.3,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[10] overflow-hidden select-none">
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="absolute rounded-full bg-[var(--accent-50)] animate-snow-fall"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            top: "-10px",
          }}
        />
      ))}
    </div>
  )
}
