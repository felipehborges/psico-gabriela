import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questions = [
  {
    question: "Preciso saber exatamente o que tenho para começar a terapia?",
    answer:
      "Não. Você não precisa chegar com um diagnóstico ou saber exatamente qual é o problema. Podemos partir daquilo que está incomodando ou da sensação de que algo precisa ser compreendido.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "As sessões possuem duração aproximada de 50 minutos.",
  },
  {
    question:
      "A psicoterapia é indicada somente para quem está passando por algum problema?",
    answer:
      "Não. Ela também pode ser um espaço de autoconhecimento, reflexão e desenvolvimento pessoal, inclusive em momentos de mudança ou tomada de decisões.",
  },
  {
    question: "A psicoterapia online funciona?",
    answer:
      "Sim. O atendimento online permite realizar o processo psicoterapêutico à distância, mantendo o cuidado, o sigilo e a qualidade do acompanhamento profissional.",
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer:
      "Não existe um período único para todas as pessoas. A duração depende das necessidades, dos objetivos e da evolução de cada processo.",
  },
  {
    question: "O que devo falar na primeira sessão?",
    answer:
      "Não existe um roteiro que você precise seguir. Podemos começar conversando sobre o que fez você procurar terapia neste momento.",
  },
]

export function Faq() {
  return (
    <section id="perguntas" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Perguntas frequentes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground text-balance">
            Dúvidas antes de começar
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
