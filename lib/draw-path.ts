import gsap from "gsap"

/** Prepare SVG paths for stroke-draw animation */
export function setupDrawPaths(
  container: Element | null,
  selector: string
): SVGPathElement[] {
  if (!container) return []

  const paths = gsap.utils.toArray<SVGPathElement>(container.querySelectorAll(selector))

  paths.forEach((path) => {
    const length = path.getTotalLength()
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      fill: "none",
    })
  })

  return paths
}

/** Animate paths as if drawn by hand */
export function drawPaths(
  paths: SVGPathElement[],
  duration = 1.2,
  stagger = 0.15
) {
  return gsap.to(paths, {
    strokeDashoffset: 0,
    duration,
    stagger,
    ease: "power1.inOut",
  })
}

/** Erase paths (reverse draw) */
export function erasePaths(paths: SVGPathElement[], duration = 0.8, stagger = 0.08) {
  return gsap.to(paths, {
    strokeDashoffset: (i, target) => {
      const path = target as SVGPathElement
      return path.getTotalLength()
    },
    duration,
    stagger,
    ease: "power2.in",
  })
}
