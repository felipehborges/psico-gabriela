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
      className="py-24 px-6 bg-primary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-foreground/70 font-medium tracking-wide uppercase text-sm mb-4">
            Como funciona a psicoterapia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
            Um processo construído em conjunto
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            Não existe uma fórmula pronta. A partir da compreensão do que você
            está vivendo, construímos um caminho terapêutico individualizado,
            respeitando seu tempo, suas necessidades e seus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <Icon className="h-8 w-8 mb-6 opacity-70" />
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
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
