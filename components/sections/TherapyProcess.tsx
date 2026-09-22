import { Laptop, MapPin, MessageCircle } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiras sessões",
    description:
      "Conversamos sobre o que trouxe você à psicoterapia, sua história, suas experiências e o momento que está vivendo.",
  },
  {
    icon: MapPin,
    title: "Atendimento presencial",
    description:
      "Os encontros acontecem em consultório, em um ambiente reservado e acolhedor, com privacidade durante o processo.",
  },
  {
    icon: Laptop,
    title: "Atendimento online",
    description:
      "O acompanhamento também pode acontecer à distância, de forma segura, individualizada e com o mesmo compromisso profissional.",
  },
]

export function TherapyProcess() {
  return (
    <section
      id="como-funciona"
      className="bg-primary px-5 py-20 text-primary-foreground md:px-10 md:py-28 lg:px-18 lg:py-35"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-[12.5px] font-medium tracking-[0.04em] text-primary-foreground/70">
            Como funciona a psicoterapia
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.15rem,4.1vw,3.25rem)] font-light leading-[1.18] tracking-[-0.02em]">
            Um processo construído em conjunto
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/80">
            Não existe uma fórmula pronta. A partir da compreensão do que você
            está vivendo, construímos um caminho terapêutico individualizado,
            respeitando seu tempo, suas necessidades e seus objetivos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="border-t border-primary-foreground/45 pt-5"
              >
                <Icon className="mb-5 h-5 w-5 opacity-75" />
                <h3 className="mb-2 font-serif text-2xl font-normal">{step.title}</h3>
                <p className="font-mono text-[12px] leading-relaxed text-primary-foreground/80">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mt-12">
          Atendo adultos e idosos. A psicoterapia pode fazer sentido diante de
          um sofrimento, de uma mudança ou decisão importante, ou quando surge a
          necessidade de olhar para a própria vida com mais atenção.
        </p>
      </div>
    </section>
  )
}
