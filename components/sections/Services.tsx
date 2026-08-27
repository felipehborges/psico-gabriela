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
    <section id="servicos" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            O que podemos trabalhar
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground mb-6 text-balance">
            Cada pessoa chega à terapia com uma história diferente
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Algumas pessoas chegam por um sofrimento específico; outras sentem
            que algo não está bem, mas ainda não conseguem identificar
            exatamente o quê.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Brain
            return (
              <Card
                key={service.title}
                className="bg-card border-border hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-12">
          Essa lista não limita o que pode ser levado para a psicoterapia. Você
          não precisa saber exatamente o que está acontecendo para procurar
          ajuda — às vezes, o primeiro passo é ter um espaço para compreender.
        </p>
      </div>
    </section>
  )
}
