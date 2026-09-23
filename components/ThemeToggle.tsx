"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Render placeholder to prevent layout shift during hydration
  if (!mounted) return <span className="zip-theme-placeholder" aria-hidden="true" />

  return (
    <button
      type="button"
      className="zip-theme-toggle"
      aria-label={
        resolvedTheme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"
      }
      title={resolvedTheme === "dark" ? "Modo claro" : "Modo escuro"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  )
}
