export const HERO_FRAME_COUNT = 154

/** Scroll distance for room parallax + monitor zoom (viewport heights). */
export const ROOM_INTRO_SCROLL_VH = 3

/** Scroll distance for the frame sequence after zoom (viewport heights). */
export const HERO_VIDEO_SCROLL_VH = 3

/** Transform origin for zoom — center of the CRT screen in room.png */
export const ROOM_MONITOR_ORIGIN = { x: "50%", y: "60%" }

export function getHeroFramePath(frameIndex: number): string {
  const frame = Math.max(1, Math.min(HERO_FRAME_COUNT, frameIndex + 1))
  return `/images/video/ezgif-frame-${String(frame).padStart(3, "0")}.jpg`
}

export function getRoomPhaseRatio(): number {
  return ROOM_INTRO_SCROLL_VH / (ROOM_INTRO_SCROLL_VH + HERO_VIDEO_SCROLL_VH)
}

/** Fraction of total pinned scroll used to scrub copy panel in/out (after room phase). */
export const COPY_SCRUB_SCROLL_RATIO = 0.22

export function getCopyScrollProgress(totalProgress: number): number {
  const copyStart = getRoomPhaseRatio()
  const copyEnd = Math.min(1, copyStart + COPY_SCRUB_SCROLL_RATIO)
  if (totalProgress <= copyStart) return 0
  if (totalProgress >= copyEnd) return 1
  return (totalProgress - copyStart) / (copyEnd - copyStart)
}
