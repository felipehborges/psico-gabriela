import Image from "next/image"
import Link from "next/link"
import { MoreDetails } from "@/components/MoreDetails"
import { RevealImage } from "@/components/RevealImage"
import { siteConfig } from "@/config/site"

export function ZipDesign() {
  return (
    <main className="zip-page">
      <header className="zip-header">
        <div className="zip-brand">
          <Image src="/assets/mark.png" alt="" width={44} height={44} priority />
          <span>Gabriela Almeida</span>
        </div>
        <nav className="zip-nav" aria-label="Navegação principal">
          <Link href="#sobre">Sobre mim</Link>
          <Link href="#abordagem">Abordagem</Link>
          <Link href="#contato">Contato</Link>
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
          <div className="zip-portrait-frame"><div className="zip-portrait-border" /><div className="zip-portrait-photo"><RevealImage src="/images/gabriela-entrada-hq.webp" alt="Gabriela Almeida sorrindo em seu consultório" width={2400} height={3600} sizes="(max-width: 700px) 90vw, 470px" quality={88} priority /></div></div>
        </div>
      </section>

      <section id="sobre" className="zip-about"><div className="zip-narrow zip-about-inner">
        <div className="zip-about-frame"><div className="zip-about-photo"><RevealImage src="/images/gabriela-sobre-hq.webp" alt="Gabriela Almeida sentada no espaço de atendimento" width={2200} height={3300} sizes="(max-width: 700px) 90vw, 420px" quality={88} /></div></div>
        <div className="zip-about-copy" style={{ alignSelf: "start" }}><p className="zip-section-label">Sobre mim</p><h2>Uma escuta atenta à <em>sua história.</em></h2><p>Sou psicóloga clínica, formada pela UMC em 2020, e atuo desde 2021.</p><p>Ofereço uma escuta acolhedora, sem julgamentos ou respostas prontas, para construirmos juntos um caminho que faça sentido para você.</p>
          <MoreDetails label="Conheça mais sobre mim"><p>Ao longo da minha trajetória, venho acompanhando adultos e idosos em momentos de sofrimento emocional, mudanças, escolhas e busca por novos sentidos.</p><p>Acredito que cada pessoa carrega uma história única. Por isso, construímos o processo terapêutico em conjunto, respeitando seu tempo e aquilo que faz sentido para você.</p></MoreDetails>
        </div>
      </div></section>

      <section id="abordagem" className="zip-approach"><div className="zip-narrow">
        <div className="zip-section-intro"><p>Minha abordagem</p><h2>Logoterapia: um olhar para o sentido da vida.</h2><div className="zip-section-description">Um espaço para explorar sua história, seus valores e suas escolhas.</div></div>
        <div className="zip-columns">
          <article><span>01</span><h3>Sem julgamentos</h3><p>Fale sobre o que vive, mesmo sem saber por onde começar.</p></article>
          <article><span>02</span><h3>No seu tempo</h3><p>Um processo individual, construído em conjunto.</p></article>
          <article><span>03</span><h3>Online e presencial</h3><p>Atendimento individual para adultos e idosos.</p></article>
        </div>
        <MoreDetails label="Entenda melhor a Logoterapia" centered><p>Desenvolvida por Viktor Frankl, a Logoterapia parte da busca humana por sentido. Isso não exige encontrar uma grande resposta pronta: podemos olhar para sua história, seus valores, suas relações e suas escolhas.</p><p>Na psicoterapia, essa perspectiva ajuda a reconhecer possibilidades diante das circunstâncias vividas e a construir caminhos mais alinhados com aquilo que tem significado para você.</p></MoreDetails>
      </div></section>

      <section className="zip-google-reviews" aria-labelledby="avaliacoes-titulo"><div className="zip-narrow">
        <div className="zip-reviews-heading">
          <div><p className="zip-section-label">Avaliações no Google</p><h2 id="avaliacoes-titulo">Palavras de quem passou por aqui.</h2></div>
          <div className="zip-google-summary"><strong>{siteConfig.googleReviews.rating}</strong><div><span role="img" aria-label="5 de 5 estrelas">★★★★★</span><p>{siteConfig.googleReviews.count} avaliações no Google</p></div></div>
        </div>
        <div className="zip-review-grid">{siteConfig.googleReviews.excerpts.map((review) => (
          <article className="zip-review-card" key={review.author}>
            <span className="zip-review-stars" role="img" aria-label="5 de 5 estrelas">★★★★★</span>
            <blockquote>“{review.text}”</blockquote>
            <div className="zip-review-meta"><span>{review.author}</span><a href={review.url} target="_blank" rel="noopener noreferrer">Ler no Google ↗</a></div>
          </article>
        ))}</div>
        <div className="zip-reviews-footnote"><span>Trechos de avaliações públicas · consultadas em {siteConfig.googleReviews.checkedAt}</span><a href={siteConfig.googleReviews.url} target="_blank" rel="noopener noreferrer">Ver todas as avaliações no Google ↗</a></div>
      </div></section>

      <section id="contato" className="zip-contact"><div className="zip-contact-inner">
        <div className="zip-contact-copy"><p>Vamos conversar?</p><h2>Seu espaço de escuta começa aqui.</h2><p className="zip-contact-description">Entre em contato para agendar seu atendimento.</p><address><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br /><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">{siteConfig.phone}</a><br />Atendimento online e presencial em Arujá, São Paulo</address></div>
        <div className="zip-contact-action"><Image src="/assets/mark.png" alt="" width={120} height={120} /><Link href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="zip-primary-button">Agende seu atendimento pelo WhatsApp</Link></div>
      </div></section>

      <footer className="zip-footer"><div><span className="zip-footer-brand"><Image src="/assets/mark.png" alt="" width={32} height={32} /> Gabriela Almeida · Psicóloga Clínica · CRP 06/177348</span><nav aria-label="Redes sociais"><a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a></nav></div></footer>
    </main>
  )
}
