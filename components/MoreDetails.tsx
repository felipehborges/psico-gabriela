"use client"

import { useId, useState, type ReactNode } from "react"

type MoreDetailsProps = {
  children: ReactNode
  centered?: boolean
  label: string
}

export function MoreDetails({ children, centered = false, label }: MoreDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  return (
    <div className={`zip-more${centered ? " zip-more-centered" : ""}${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        aria-controls={contentId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {label} <span aria-hidden="true">+</span>
      </button>
      <div id={contentId} className="zip-more-content" aria-hidden={!isOpen}>
        <div className="zip-more-content-inner">{children}</div>
      </div>
    </div>
  )
}
