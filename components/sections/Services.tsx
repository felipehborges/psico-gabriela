import { Brain, Heart, Users, Leaf, Calendar } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Heart,
  Users,
  Leaf,
  Calendar,
}

export function Services() {
  return (
    <section id="servicos" className="bg-secondary px-5 py-20 md:px-10 md:py-28 lg:px-18 lg:py-35">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-[12.5px] font-medium tracking-[0.04em] text-muted-foreground">
            O que podemos trabalhar
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.15rem,4.1vw,3.25rem)] font-light leading-[1.18] tracking-[-0.02em] text-foreground">
            Cada pessoa chega à terapia com uma história diferente
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Algumas pessoas chegam por um sofrimento específico; outras sentem
            que algo não está bem, mas ainda não conseguem identificar
            exatamente o quê.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Brain
            return (
              <Card
                key={service.title}
                className="group rounded-none border-0 border-t border-foreground/15 bg-transparent shadow-none transition-none"
              >
                <CardContent className="p-0 pt-5">
                  <div className="mb-5 flex h-9 w-9 items-center justify-center border border-primary/35">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-2xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="font-mono text-[12px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center leading-relaxed text-muted-foreground">
          Essa lista não limita o que pode ser levado para a psicoterapia. Você
          não precisa saber exatamente o que está acontecendo para procurar
          ajuda — às vezes, o primeiro passo é ter um espaço para compreender.
        </p>
      </div>
    </section>
  )
}
