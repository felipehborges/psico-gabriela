import { siteConfig } from "@/config/site"

export function Approach() {
  return (
    <section id="abordagem" className="bg-secondary px-5 py-20 md:px-10 md:py-28 lg:px-18 lg:py-35">
      <div className="mx-auto max-w-[1080px]">
        <div className="editorial-reveal text-center">
          <span className="text-3xl text-primary">⌁</span>
          <p className="mt-4 text-[12.5px] font-medium tracking-[0.04em] text-muted-foreground">Abordagem</p>
          <h2 className="mx-auto mt-5 max-w-[17ch] font-serif text-[clamp(2.15rem,4.1vw,3.25rem)] font-light leading-[1.18] tracking-[-0.02em] text-foreground">Cada processo começa por uma escuta sem pressa.</h2>
        </div>
        <div className="mt-16 grid gap-9 md:grid-cols-3 md:gap-12">
          {siteConfig.approach.map((item) => (
            <article key={item.number} className="border-t border-foreground/15 pt-5">
              <span className="font-mono text-[11px] text-primary">{item.number}</span>
              <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">{item.title}</h3>
              <p className="mt-2.5 font-mono text-[12px] leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
