"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function NavBar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-5 px-5 py-4 md:px-10 lg:px-18">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center text-primary text-xl leading-none">⌁</span>
          <span className="font-serif text-[22px] leading-none text-foreground">
            {siteConfig.name}
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <Link
            href="#abordagem"
            className="transition-colors hover:text-primary"
          >
            Abordagem
          </Link>
          <Link
            href="#sobre"
            className="transition-colors hover:text-primary"
          >
            Sobre
          </Link>
          <Link
            href="#contato"
            className="transition-colors hover:text-primary"
          >
            Contato
          </Link>
        </div>
        <div className="flex items-center">
          <Button
            className="rounded-full border border-primary/50 bg-transparent px-5 text-primary shadow-none hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar atendimento
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
