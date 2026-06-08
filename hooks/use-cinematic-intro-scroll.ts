"use client"

import {
  getCopyScrollProgress,
  getHeroFramePath,
  getRoomPhaseRatio,
  HERO_FRAME_COUNT,
  HERO_VIDEO_SCROLL_VH,
  ROOM_INTRO_SCROLL_VH,
  ROOM_MONITOR_ORIGIN,
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

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640

  if (imgRatio > canvasRatio) {
    drawHeight = height
    drawWidth = height * imgRatio
    offsetX = isMobile ? -120 : (width - drawWidth) / 2
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

/** Room phase: first ~45% parallax, rest zoom into monitor */
const PARALLAX_PORTION = 0.45
const ZOOM_SCALE_END = 14

type UseCinematicIntroScrollOptions = {
  enabled?: boolean
  copyTimelineRef?: React.RefObject<gsap.core.Timeline | null>
}

export function useCinematicIntroScroll(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  roomRef: React.RefObject<HTMLDivElement | null>,
  wrapperRef: React.RefObject<HTMLDivElement | null>,
  pinRef: React.RefObject<HTMLElement | null>,
  { enabled = true, copyTimelineRef }: UseCinematicIntroScrollOptions = {}
) {
  const imagesRef = useRef<(HTMLImageElement | undefined)[]>([])
  const frameRef = useRef(-1)

  const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 640
  const step = isMobileDevice ? 2 : 1

  useEffect(() => {
    const canvas = canvasRef.current
    const pin = pinRef.current
    if (!canvas || !pin) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = isMobileDevice ? 1 : Math.min(window.devicePixelRatio || 1, 2)
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
      
      let targetIndex = clamped
      if (isMobileDevice && step > 1) {
        targetIndex = Math.round(clamped / step) * step
        if (targetIndex >= HERO_FRAME_COUNT) targetIndex = HERO_FRAME_COUNT - 1
      }

      if (targetIndex === frameRef.current) return
      frameRef.current = targetIndex

      const img = imagesRef.current[targetIndex]
      if (!img?.complete) return

      const dpr = isMobileDevice ? 1 : Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      drawFrameCover(ctx, img, width, height)
    }

    const images: (HTMLImageElement | undefined)[] = new Array(HERO_FRAME_COUNT)
    imagesRef.current = images

    let cancelled = false
    const BATCH = 24

    const loadFrame = (index: number) =>
      new Promise<void>((resolve) => {
        if (isMobileDevice && index % step !== 0 && index !== 0 && index !== HERO_FRAME_COUNT - 1) {
          resolve()
          return
        }

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

      if (!enabled) return

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
  }, [canvasRef, pinRef, enabled])

  useEffect(() => {
    const canvas = canvasRef.current
    const room = roomRef.current
    const wrapper = wrapperRef.current
    const pin = pinRef.current
    if (!canvas || !room || !wrapper || !pin || !enabled) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    gsap.set(room, {
      transformOrigin: `${ROOM_MONITOR_ORIGIN.x} ${ROOM_MONITOR_ORIGIN.y}`,
      scale: 1,
      y: 0,
      autoAlpha: 1,
    })
    gsap.set(canvas, { autoAlpha: 1 })
    gsap.set(".hero-cinematic-copy", { autoAlpha: 0 })

    const renderFrame = (index: number) => {
      const clamped = Math.max(0, Math.min(HERO_FRAME_COUNT - 1, index))
      
      let targetIndex = clamped
      if (isMobileDevice && step > 1) {
        targetIndex = Math.round(clamped / step) * step
        if (targetIndex >= HERO_FRAME_COUNT) targetIndex = HERO_FRAME_COUNT - 1
      }

      if (targetIndex === frameRef.current) return
      frameRef.current = targetIndex

      const img = imagesRef.current[targetIndex]
      if (!img?.complete) return

      const dpr = isMobileDevice ? 1 : Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      drawFrameCover(ctx, img, width, height)
    }

    const updateRoomPhase = (roomProgress: number) => {
      if (roomProgress <= PARALLAX_PORTION) {
        const t = roomProgress / PARALLAX_PORTION
        gsap.set(room, {
          y: `0`,
          scale: 1 + 0.07 * t,
          autoAlpha: 1,
        })
      } else {
        const t = (roomProgress - PARALLAX_PORTION) / (1 - PARALLAX_PORTION)
        const scale = gsap.utils.interpolate(1.07, ZOOM_SCALE_END, t)
        gsap.set(room, {
          y: "0%",
          scale,
          autoAlpha: Math.max(0, 1 - t * 1.15),
        })
      }
    }

    const updateCopyScrub = (totalProgress: number) => {
      const tl = copyTimelineRef?.current
      if (!tl) return

      const progress = getCopyScrollProgress(totalProgress)
      tl.progress(progress)

      const visible = progress > 0.001
      gsap.set(".hero-cinematic-copy", {
        autoAlpha: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        pointerEvents: progress > 0.92 ? "auto" : "none",
      })
    }

    let scrollTrigger: ScrollTrigger | null = null

    if (!reduceMotion) {
      const roomPhaseRatio = getRoomPhaseRatio()

      scrollTrigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () =>
          `+=${window.innerHeight * (ROOM_INTRO_SCROLL_VH + HERO_VIDEO_SCROLL_VH)}`,
        scrub: 0.4,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress

          // Video always plays behind the room PNG
          const frameIndex = Math.min(
            HERO_FRAME_COUNT - 1,
            Math.floor(p * HERO_FRAME_COUNT)
          )
          renderFrame(frameIndex)
          updateCopyScrub(p)

          if (p <= roomPhaseRatio) {
            updateRoomPhase(p / roomPhaseRatio)
          } else {
            gsap.set(room, { autoAlpha: 0 })
          }
        },
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    } else {
      gsap.set(room, { autoAlpha: 1, scale: 1 })
      renderFrame(0)
      updateCopyScrub(1)
    }

    return () => {
      scrollTrigger?.kill()
    }
  }, [canvasRef, roomRef, wrapperRef, pinRef, enabled, copyTimelineRef])
}
