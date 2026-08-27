import Image from "next/image"
import { siteConfig } from "@/config/site"

export function Approach() {
  return (
    <section id="abordagem" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">
              Minha Abordagem
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground text-balance">
              Logoterapia: uma psicoterapia voltada para o sentido da vida
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Minha prática clínica é fundamentada na Logoterapia, abordagem
              desenvolvida pelo psiquiatra e neurologista austríaco Viktor Emil
              Frankl. Ela parte da compreensão de que o ser humano está
              constantemente em busca de sentido para a própria existência.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Isso não exige encontrar uma grande resposta para a vida. Mesmo
              diante de circunstâncias que não escolhemos, podemos refletir
              sobre como nos posicionamos e sobre aquilo que dá significado à
              nossa existência.
            </p>

            <div className="space-y-6 pt-4">
              {siteConfig.approach.map((item) => (
                <div key={item.number} className="flex gap-6 items-start">
                  <span className="font-serif text-3xl text-primary/30">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-3xl transform rotate-3" />
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/calming-therapy-session-environment--two-comfortab.jpg"
                alt="Ambiente terapêutico"
                width={600}
                height={600}
                className="object-cover w-full h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
