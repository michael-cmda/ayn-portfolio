"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          entry.target.classList.remove("animate-out")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      section.classList.add("scroll-animate")
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return null
}
