import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function ZipDesign() {
  return (
    <main className="zip-page">
      <header className="zip-header">
        <div className="zip-brand" aria-label="Símbolo de Gabriela Almeida">
          <Image src="/assets/mark.png" alt="" width={44} height={44} priority />
        </div>
        <nav className="zip-nav" aria-label="Navegação principal">
          <Link href="#sobre">Sobre mim</Link>
          <Link href="#abordagem">Abordagem</Link>
          <Link href="#contato">Contato</Link>
          <Link href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="zip-outline-button">Agendar atendimento</Link>
        </nav>
      </header>

      <section id="top" className="zip-hero">
        <Image className="zip-ghost-mark" src="/assets/mark.png" alt="" width={620} height={620} aria-hidden />
        <div className="zip-hero-inner">
          <div className="zip-hero-copy">
            <p className="zip-eyebrow"><span /> Gabriela Almeida · Psicóloga Clínica · CRP 06/177348</p>
            <h1>Um espaço para se escutar e <em>encontrar novos caminhos.</em></h1>
            <p className="zip-hero-description">Psicoterapia com acolhimento, clareza e respeito ao seu tempo.</p>
            <div className="zip-hero-actions"><Link href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="zip-primary-button">Agende seu atendimento</Link><Link href="#abordagem" className="zip-text-link">Conheça a abordagem <span>→</span></Link></div>
          </div>
          <div className="zip-portrait-frame"><div className="zip-portrait-border" /><Image src="/images/gabriela-entrada-hq.webp" alt="Gabriela Almeida sorrindo em seu consultório" width={2400} height={3600} sizes="(max-width: 700px) 90vw, 470px" unoptimized priority /></div>
        </div>
      </section>

      <section id="sobre" className="zip-about"><div className="zip-narrow zip-about-inner">
        <div className="zip-about-photo"><Image src="/images/gabriela-sobre-hq.webp" alt="Gabriela Almeida sentada no espaço de atendimento" width={2200} height={3300} sizes="(max-width: 700px) 90vw, 420px" unoptimized /></div>
        <div className="zip-about-copy"><p className="zip-section-label">Sobre mim</p><h2>Prazer, sou <em>Gabriela.</em></h2><p>Sou psicóloga clínica, formada pela UMC em 2020, e atuo desde 2021.</p><p>Ofereço uma escuta acolhedora, sem julgamentos ou respostas prontas, para construirmos juntos um caminho que faça sentido para você.</p></div>
      </div></section>

      <section id="abordagem" className="zip-approach"><div className="zip-narrow">
        <div className="zip-section-intro"><Image src="/assets/mark.png" alt="" width={52} height={52} /><p>Minha abordagem</p><h2>Logoterapia: um olhar para o sentido da vida.</h2><div className="zip-section-description">Um espaço para explorar sua história, seus valores e suas escolhas.</div></div>
        <div className="zip-columns">
          <article><span>01</span><h3>Sem julgamentos</h3><p>Fale sobre o que vive, mesmo sem saber por onde começar.</p></article>
          <article><span>02</span><h3>No seu tempo</h3><p>Um processo individual, construído em conjunto.</p></article>
          <article><span>03</span><h3>Online e presencial</h3><p>Atendimento individual para adultos e idosos.</p></article>
        </div>
      </div></section>

      <section className="zip-reflection"><div className="zip-narrow"><p className="zip-section-label">Quando buscar psicoterapia?</p><h2>Você não precisa ter todas as respostas para começar.</h2><p>Ansiedade, perdas, mudanças ou o desejo de se conhecer melhor já são motivos para conversar.</p></div></section>

      <section id="contato" className="zip-contact"><div className="zip-contact-inner">
        <div className="zip-contact-copy"><p>Vamos conversar?</p><h2>Seu espaço de escuta começa aqui.</h2><p className="zip-contact-description">Entre em contato para agendar seu atendimento.</p><address><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br /><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">{siteConfig.phone}</a><br />Atendimento online e presencial</address></div>
        <div className="zip-contact-action"><Image src="/assets/mark.png" alt="" width={120} height={120} /><Link href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="zip-primary-button">Agende seu atendimento pelo WhatsApp</Link></div>
      </div></section>

      <footer className="zip-footer"><div><span className="zip-footer-brand"><Image src="/assets/mark.png" alt="" width={32} height={32} /> Gabriela Almeida · Psicóloga Clínica · CRP 06/177348</span><nav aria-label="Redes sociais"><a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a></nav></div></footer>
    </main>
  )
}
