"use client"

import { useEffect } from "react"

export function ScrollReveal() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".zip-page")
    if (!page || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const elements = Array.from(page.querySelectorAll<HTMLElement>("[data-reveal]"))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    )

    for (const element of elements) observer.observe(element)
    page.classList.add("reveal-ready")

    return () => {
      observer.disconnect()
      page.classList.remove("reveal-ready")
    }
  }, [])

  return null
}
