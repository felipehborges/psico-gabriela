import { Heart, Quote } from "lucide-react"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export function About() {
  return (
    <section id="sobre" className="px-5 py-20 md:px-10 md:py-28 lg:px-18 lg:py-35">
      <div className="mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden">
                <Image
                  src="/cozy-therapy-office-with-comfortable-seating--warm.jpg"
                  alt="Espaço terapêutico"
                  width={250}
                  height={300}
                className="h-75 w-full object-cover"
                />
              </div>
              <div className="border border-primary/40 p-6 text-primary">
                <Quote className="mb-4 h-7 w-7 opacity-60" />
                <p className="font-serif text-lg font-light italic">
                  &ldquo;A psicoterapia não deve ser um espaço de respostas
                  prontas, mas de construção conjunta.&rdquo;
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-secondary p-6">
                <Heart className="mb-4 h-7 w-7 text-primary" />
                <p className="font-serif text-xl text-foreground">Escuta acolhedora</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Um processo que respeita sua história e seu tempo
                </p>
              </div>
              <div className="overflow-hidden">
                <Image
                  src="/peaceful-zen-garden-with-stones-and-greenery--mini.jpg"
                  alt="Ambiente tranquilo"
                  width={250}
                  height={280}
                className="h-70 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-[12.5px] font-medium tracking-[0.04em] text-muted-foreground">
            Sobre Mim
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.3rem,4.1vw,3.25rem)] font-light leading-[1.18] tracking-[-0.02em] text-foreground">
            Prazer, sou Gabriela
          </h2>
          <div className="mt-7 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Sou Gabriela Almeida, psicóloga clínica, formada pela Universidade
              de Mogi das Cruzes (UMC) em 2020, e atuo na área clínica desde
              2021.
            </p>
            <p>
              Ao longo da minha trajetória, venho acompanhando pessoas em
              períodos de sofrimento emocional e conflitos pessoais, assim como
              em fases de mudanças, escolhas e busca por novos sentidos.
            </p>
            <p>
              Acredito que cada pessoa carrega uma história única. Meu propósito
              é caminhar ao seu lado, ajudando você a compreender suas
              experiências e reconhecer possibilidades de escolha diante da
              própria vida.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {siteConfig.badges.map((badge) => (
              <span
                key={badge}
                className="border border-foreground/15 px-3 py-1.5 text-[12px] text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
