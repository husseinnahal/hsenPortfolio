"use client"

import {
  getHeroFramePath,
  HERO_FRAME_COUNT,
  HERO_VIDEO_SCROLL_VH,
} from "@/lib/hero-video-frames"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

function drawFrameCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number
) {
  const imgRatio = img.naturalWidth / img.naturalHeight
  const canvasRatio = width / height
  let drawWidth: number
  let drawHeight: number
  let offsetX: number
  let offsetY: number

  if (imgRatio > canvasRatio) {
    drawHeight = height
    drawWidth = height * imgRatio
    offsetX = (width - drawWidth) / 2
    offsetY = 0
  } else {
    drawWidth = width
    drawHeight = width / imgRatio
    offsetX = 0
    offsetY = (height - drawHeight) / 2
  }

  ctx.clearRect(0, 0, width, height)
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
}

type UseHeroScrollVideoOptions = {
  enabled?: boolean
}

export function useHeroScrollVideo(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  pinRef: React.RefObject<HTMLElement | null>,
  { enabled = true }: UseHeroScrollVideoOptions = {}
) {
  const imagesRef = useRef<(HTMLImageElement | undefined)[]>([])
  const frameRef = useRef(-1)

  useEffect(() => {
    const canvas = canvasRef.current
    const pin = pinRef.current
    if (!canvas || !pin) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = pin.getBoundingClientRect()
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const frame = frameRef.current >= 0 ? frameRef.current : 0
      const img = imagesRef.current[frame]
      if (img?.complete) {
        drawFrameCover(ctx, img, width, height)
      }
    }

    const renderFrame = (index: number) => {
      const clamped = Math.max(0, Math.min(HERO_FRAME_COUNT - 1, index))
      if (clamped === frameRef.current) return
      frameRef.current = clamped

      const img = imagesRef.current[clamped]
      if (!img?.complete) return

      const { width, height } = pin.getBoundingClientRect()
      drawFrameCover(ctx, img, width, height)
    }

    const images: (HTMLImageElement | undefined)[] = new Array(HERO_FRAME_COUNT)
    imagesRef.current = images

    let cancelled = false
    const BATCH = 24

    const loadFrame = (index: number) =>
      new Promise<void>((resolve) => {
        const img = new Image()
        img.decoding = "async"
        img.src = getHeroFramePath(index)
        const finish = () => {
          if (!cancelled) images[index] = img
          resolve()
        }
        img.onload = finish
        img.onerror = finish
      })

    const preload = async () => {
      await loadFrame(0)
      if (cancelled) return
      resizeCanvas()
      renderFrame(0)

      for (let start = 1; start < HERO_FRAME_COUNT; start += BATCH) {
        if (cancelled) return
        const end = Math.min(start + BATCH, HERO_FRAME_COUNT)
        await Promise.all(
          Array.from({ length: end - start }, (_, i) => loadFrame(start + i))
        )
      }
    }

    void preload()

    resizeCanvas()
    const ro = new ResizeObserver(resizeCanvas)
    ro.observe(pin)

    return () => {
      cancelled = true
      ro.disconnect()
    }
  }, [canvasRef, pinRef])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    const pin = pinRef.current
    if (!canvas || !wrapper || !pin || !enabled) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const renderFrame = (index: number) => {
      const clamped = Math.max(0, Math.min(HERO_FRAME_COUNT - 1, index))
      if (clamped === frameRef.current) return
      frameRef.current = clamped

      const img = imagesRef.current[clamped]
      if (!img?.complete) return

      const { width, height } = pin.getBoundingClientRect()
      drawFrameCover(ctx, img, width, height)
    }

    let scrollTrigger: ScrollTrigger | null = null

    if (!reduceMotion) {
      scrollTrigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${window.innerHeight * HERO_VIDEO_SCROLL_VH}`,
        pin,
        pinSpacing: true,
        scrub: 0.35,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(
            HERO_FRAME_COUNT - 1,
            Math.floor(self.progress * HERO_FRAME_COUNT)
          )
          renderFrame(index)
        },
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    }

    return () => {
      scrollTrigger?.kill()
    }
  }, [canvasRef, wrapperRef, pinRef, enabled])
}
