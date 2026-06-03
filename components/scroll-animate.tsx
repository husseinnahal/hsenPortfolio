"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export function ScrollAnimate() {
  useEffect(() => {
    const initAnimations = () => {
      const techSection = document.querySelector('[data-animate="technologies"]')
      const techCards = techSection?.querySelectorAll('[data-animate="tech-card"]')

      if (!techSection || !techCards?.length) {
        setTimeout(initAnimations, 150)
        return
      }

      // Section titles — line reveal
      gsap.utils.toArray<HTMLElement>("[data-section-title]").forEach((title) => {
        gsap.fromTo(
          title,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })

      // Skills — cards slide from alternating sides
      const skillsSection = document.querySelector("#skills")
      if (skillsSection) {
        const skillCards = skillsSection.querySelectorAll('[data-animate="skill-card"]')
        skillCards.forEach((card, i) => {
          const fromX = i % 2 === 0 ? -80 : 80
          gsap.fromTo(
            card,
            { autoAlpha: 0, x: fromX, rotateY: i % 2 === 0 ? -8 : 8 },
            {
              autoAlpha: 1,
              x: 0,
              rotateY: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          )
        })
      }

      // Technologies — stagger + scale
      if (techSection) {
        const techTitle = techSection.querySelector('[data-animate="tech-title"]')
        const techBadges = techSection.querySelectorAll('[data-animate="tech-badge"]')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: techSection,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })

        if (techTitle) {
          tl.fromTo(techTitle, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" })
        }
        if (techCards.length) {
          tl.fromTo(
            Array.from(techCards),
            { autoAlpha: 0, y: 50, scale: 0.85 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.4)" },
            "-=0.4"
          )
        }
        if (techBadges.length) {
          tl.fromTo(
            Array.from(techBadges),
            { autoAlpha: 0, scale: 0.6 },
            { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: "power2.out" },
            "-=0.3"
          )
        }
      }

      // Journey — slide from left on scroll
      const journeySection = document.querySelector('[data-animate="journey"]')
      if (journeySection) {
        const journeyCards = journeySection.querySelectorAll('[data-animate="journey-card"]')
        journeyCards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, x: -100 * (i % 2 === 0 ? 1 : -1) },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                toggleActions: "play none none reverse",
              },
            }
          )
        })
      }

      // Projects — horizontal drift on scroll
      const projectsSection = document.querySelector('[data-animate="projects"]')
      if (projectsSection) {
        const projectCards = projectsSection.querySelectorAll('[data-animate="project-card"]')
        const projectsTitle = projectsSection.querySelector("h2")

        if (projectsTitle) {
          gsap.fromTo(
            projectsTitle,
            { autoAlpha: 0, y: 30 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: projectsSection,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }

        projectCards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 60, x: i === 1 ? 40 : i === 2 ? -40 : 0 },
            {
              autoAlpha: 1,
              y: 0,
              x: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          )

          gsap.to(card, {
            x: i % 2 === 0 ? -15 : 15,
            ease: "none",
            scrollTrigger: {
              trigger: projectsSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          })
        })
      }

      // Parallax orbs in sections
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      ScrollTrigger.refresh()
    }

    const timeoutId = setTimeout(initAnimations, 400)

    return () => {
      clearTimeout(timeoutId)
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return null
}
