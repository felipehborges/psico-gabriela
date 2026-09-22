import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-14 md:px-10 md:py-20 lg:px-18 lg:py-26">
      <div className="pointer-events-none absolute -right-24 top-4 select-none font-serif text-[30rem] font-light leading-none text-primary/[0.035]">⌁</div>
      <div className="editorial-reveal relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1fr_470px] lg:gap-22">
        <div>
          <p className="mb-7 flex items-center gap-2.5 text-[12.5px] font-medium tracking-[0.04em] text-muted-foreground">
            <span className="h-px w-5.5 bg-primary" /> Psicóloga clínica · Atendimento online e presencial
          </p>
          <h1 className="max-w-[10ch] font-serif text-[clamp(3rem,5.4vw,4.5rem)] font-light leading-[1.14] tracking-[-0.02em] text-foreground">
            Um espaço para <em className="font-light text-primary">se escutar</em>.
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            A psicoterapia pode ser um espaço de acolhimento, reflexão e
            transformação — respeitando sua história, seu momento de vida e
            aquilo que você busca compreender.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button
              size="lg"
              className="rounded-full bg-primary px-7 text-primary-foreground shadow-none hover:bg-[#8a6a2b]"
              asChild
            >
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar consulta
              </Link>
            </Button>
            <Button
              size="lg"
              variant="link"
              className="h-auto p-0 text-muted-foreground underline-offset-4 hover:text-primary"
              asChild
            >
              <Link href="#abordagem">Conhecer a abordagem&nbsp; →</Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-primary/45" />
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/professional-female-psychologist-in-warm-modern-of.jpg"
              alt={siteConfig.name}
              width={500}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
