"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export function ScrollAnimate() {
  useEffect(() => {
    // Add delay for mobile refresh issue - wait for elements to be fully rendered
    const initAnimations = () => {
      // Check if all required elements exist, if not, retry after a short delay
      const techSection = document.querySelector('[data-animate="technologies"]')
      const techCards = techSection?.querySelectorAll('[data-animate="tech-card"]')
      
      if (!techSection || !techCards || techCards.length === 0) {
        // Retry after 100ms if elements not found
        setTimeout(initAnimations, 100)
        return
      }
      
      // ===== Hero section =====
      const heroImage = document.querySelector('[data-animate="hero-image"]')
      const heroInfo = document.querySelector('[data-animate="hero-info"]')
      if (heroImage && heroInfo) {
        const tl = gsap.timeline()
        tl.fromTo(heroImage, 
          { autoAlpha: 0, scale: 0.8, y: 30 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.2)" }
        )
        .fromTo(Array.from(heroInfo.children), 
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 },
          "-=0.6"
        )
      }

      // ===== About section =====
      const aboutContent = document.querySelector('[data-animate="about"]')
      const aboutInfo = document.querySelector('[data-animate="aboutinfo"]')
      if (aboutContent || aboutInfo) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        })
        if (aboutContent) {
          tl.fromTo(aboutContent,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }
          )
        }
        if (aboutInfo) {
          tl.fromTo(aboutInfo,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
            aboutContent ? "-=0.5" : "0"
          )
        }
      }

      // ===== Skills section =====
      const skillsSection = document.querySelector("#skills")
      if (skillsSection) {
        const skillCards = skillsSection.querySelectorAll('[data-animate="skill-card"]')
        const skillTitle = skillsSection.querySelector("h2")
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: skillsSection,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        })
        if (skillTitle) {
          tl.fromTo(skillTitle,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
          )
        }
        if (skillCards.length > 0) {
          tl.fromTo(Array.from(skillCards),
            { autoAlpha: 0, y: 40, scale: 0.95 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.15 },
            "-=0.4"
          )
        }
      }

      // ===== Technologies section =====
      if (techSection) {
        const techTitle = techSection.querySelector('[data-animate="tech-title"]')
        const techBadges = techSection.querySelectorAll('[data-animate="tech-badge"]')
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: techSection,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        })
        
        if (techTitle) {
          tl.fromTo(techTitle,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
          )
        }
        if (techCards.length > 0) {
          tl.fromTo(Array.from(techCards),
            { autoAlpha: 0, y: 30, scale: 0.9 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)", stagger: 0.1 },
            "-=0.4"
          )
        }
        if (techBadges.length > 0) {
          tl.fromTo(Array.from(techBadges),
            { autoAlpha: 0, scale: 0.8 },
            { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power2.out", stagger: 0.05 },
            "-=0.3"
          )
        }
      }

      // ===== Journey section =====
      const journeySection = document.querySelector('[data-animate="journey"]')
      if (journeySection) {
        const journeyTitle = journeySection.querySelector("h2")
        const journeyCards = journeySection.querySelectorAll('[data-animate="journey-card"]')
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: journeySection,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        })
        
        if (journeyTitle) {
          tl.fromTo(journeyTitle,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
          )
        }
        if (journeyCards.length > 0) {
          tl.fromTo(Array.from(journeyCards),
            { autoAlpha: 0, y: 40, x: -20 },
            { autoAlpha: 1, y: 0, x: 0, duration: 0.6, ease: "power2.out", stagger: 0.15 },
            "-=0.4"
          )
        }
      }

      // ===== Projects section =====
      const projectsSection = document.querySelector('[data-animate="projects"]')
      if (projectsSection) {
        const projectsTitle = projectsSection.querySelector("h2")
        const projectCards = projectsSection.querySelectorAll('[data-animate="project-card"]')
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: projectsSection,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        })
        
        if (projectsTitle) {
          tl.fromTo(projectsTitle,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
          )
        }
        if (projectCards.length > 0) {
          tl.fromTo(Array.from(projectCards),
            { autoAlpha: 0, y: 50, scale: 0.95 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out", stagger: 0.15 },
            "-=0.4"
          )
        }
      }
    }

    // Add delay for mobile refresh issue - wait for elements to be fully rendered
    const timeoutId = setTimeout(initAnimations, 200)
    
    // ===== Cleanup =====
    return () => {
      clearTimeout(timeoutId)
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return null
}
