import Link from "next/link"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-9 md:px-10 lg:px-18">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg text-primary">⌁</span>
            <span className="font-serif text-xl text-foreground">
              {siteConfig.name}
            </span>
          </div>
          <div className="flex gap-6 font-mono text-[11px] text-muted-foreground">
            {siteConfig.footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
