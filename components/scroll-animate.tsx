"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

// Animation step interface

export function ScrollAnimate() {
  useEffect(() => {
    // Add delay for mobile refresh issue - wait for elements to be fully rendered
    const initAnimations = () => {
      // Check if all required elements exist, if not, retry after a short delay
      const techSection = document.querySelector('[data-animate="technologies"]')
      const techBars = techSection?.querySelectorAll('[data-animate="tech-bar"]')
      
      if (!techSection || !techBars || techBars.length === 0) {
        // Retry after 100ms if elements not found
        setTimeout(initAnimations, 100)
        return
      }
      
      // ===== Helper function for DRY code =====
      const animateSection = (trigger, animations, options = {}) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none play reverse",
          ...options,
        },
      })

      animations.forEach((vars) => {
        tl.fromTo(vars.el, vars.from, vars.to, vars.pos || "<0.2")
      })
    }

    // ===== Hero section =====
    const heroImage = document.querySelector('[data-animate="hero-image"]')
    const heroInfo = document.querySelector('[data-animate="hero-info"]')
    if (heroImage && heroInfo) {
      animateSection(heroImage, [
        {
          el: heroImage,
          from: { autoAlpha: 0, y: -50 },
          to: { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
        },
        {
          el: heroInfo,
          from: { autoAlpha: 0, x: 60 },
          to: { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" },
          pos: "<0.2",
        },
      ])
    }

    // ===== About section =====
    const aboutContent = document.querySelector('[data-animate="about"]')
    const aboutInfo = document.querySelector('[data-animate="aboutinfo"]')
    if (aboutContent && aboutInfo) {
      animateSection(aboutContent, [
        {
          el: aboutContent,
          from: { autoAlpha: 0, x: -90 },
          to: { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" },
        },
        {
          el: aboutInfo,
          from: { autoAlpha: 0, x: 90 },
          to: { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" },
          pos: "<0.1",
        },
      ])
    }

    // ===== Skills section =====
    const skillsSection = document.querySelector("#skills")
    if (skillsSection) {
      const skillCards = skillsSection.querySelectorAll('[data-animate="skill-card"]')
      animateSection(skillsSection, [
         {
           el: skillsSection.querySelector("h2"),
           from: { autoAlpha: 0, y: 30 },
           to: { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
         },
         ...Array.from(skillCards).map((card) => ({
          el: card,
          from: { autoAlpha: 0, y: 40, scale: 0.9 },
          to: { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
          pos: "<0.2",
        })),
      ])
    }

     // ===== Technologies section =====
     const techSectionElement = document.querySelector('[data-animate="technologies"]')
     if (techSectionElement) {
       const techBars = techSectionElement.querySelectorAll('[data-animate="tech-bar"]')
       const techTitle = techSectionElement.querySelector("h2")
       
       // Only animate if we have both title and bars
       if (techTitle && techBars.length > 0) {
         animateSection(techSectionElement, [
           {
             el: techTitle,
             from: { autoAlpha: 0, y: 30 },
             to: { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
           },
           ...Array.from(techBars).map((bar) => {
             const level = Number(bar.getAttribute("data-level")) || 0
             return {
               el: bar,
               from: { autoAlpha: 0, y: 20, scaleX: 0, transformOrigin: "left center" },
               to: { autoAlpha: 1, y: 0, scaleX: level / 100, duration: 0.8, ease: "power2.out" },
               pos: "<0.05",
             }
           }),
         ])
       }
     }

    // ===== Journey section =====
    const journeySection = document.querySelector('[data-animate="journey"]')
    if (journeySection) {
      animateSection(journeySection, [
        {
          el: journeySection,
          from: { autoAlpha: 0, x: 50 },
          to: { autoAlpha: 1, x: 0, duration: 0.8, ease: "power3.out" },
        },
      ])
    }

    // ===== Projects section =====
    const projectsSection = document.querySelector('[data-animate="projects"]')
    if (projectsSection) {
      const projectCards = projectsSection.querySelectorAll('[data-animate="project-card"]')
      animateSection(projectsSection, [
         {
           el: projectsSection.querySelector("h2"),
           from: { autoAlpha: 0, y: 30 },
           to: { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
         },
         ...Array.from(projectCards).map((card, index) => {
          const fromX = index % 2 === 0 ? -50 : 50
          return {
            el: card,
            from: { autoAlpha: 0, x: fromX, y: 20 },
            to: { autoAlpha: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" },
            pos: "<0.1",
          }
        }),
      ])
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
