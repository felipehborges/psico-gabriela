import Image from "next/image"
import Link from "next/link"
import { MoreDetails } from "@/components/MoreDetails"
import { RevealImage } from "@/components/RevealImage"
import { ScrollReveal } from "@/components/ScrollReveal"
import { ThemeToggle } from "@/components/ThemeToggle"
import { siteConfig } from "@/config/site"

export function ZipDesign() {
  return (
    <main className="zip-page">
      <ScrollReveal />
      <header className="zip-header">
        <div className="zip-brand">
          <Image
            src="/assets/mark.png"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>Psicóloga Gabriela Almeida</span>
        </div>
        <nav className="zip-nav" aria-label="Navegação principal">
          <Link href="#sobre">Sobre mim</Link>
          <Link href="#abordagem">Abordagem</Link>
          <Link href="#contato">Contato</Link>
          <ThemeToggle />
        </nav>
      </header>

      <section id="top" className="zip-hero">
        <Image
          className="zip-ghost-mark"
          src="/assets/mark.png"
          alt=""
          width={620}
          height={620}
          aria-hidden
        />
        <div className="zip-hero-inner">
          <div className="zip-hero-copy">
            <p className="zip-eyebrow">
              <span /> Gabriela Almeida · Psicóloga Clínica · CRP 06/177348
            </p>
            <h1>
              Um espaço para se escutar e{" "}
              <em>encontrar novos caminhos.</em>
            </h1>
            <p className="zip-hero-description">
              Psicoterapia presencial em Arujá, São Paulo, e online para todo o
              mundo.
            </p>
            <div className="zip-hero-actions">
              <Link
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="zip-primary-button"
              >
                Agende seu atendimento
              </Link>
              <Link href="#abordagem" className="zip-text-link">
                Conheça a abordagem <span>→</span>
              </Link>
            </div>
          </div>
          <div className="zip-portrait-frame">
            <div className="zip-portrait-border" />
            <div className="zip-portrait-photo">
              <RevealImage
                src="/images/gabriela-entrada-hq.webp"
                alt="Gabriela Almeida sorrindo em seu consultório"
                width={1024}
                height={1536}
                sizes="(max-width: 700px) 90vw, 470px"
                quality={88}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="zip-about">
        <div className="zip-narrow zip-about-inner">
          <div className="zip-about-frame" data-reveal>
            <div className="zip-about-photo">
              <RevealImage
                src="/images/gabriela-sobre-nova.webp"
                alt="Gabriela Almeida sentada no espaço de atendimento"
                width={1088}
                height={1600}
                sizes="(max-width: 700px) 90vw, 420px"
                quality={88}
              />
            </div>
          </div>
          <div className="zip-about-copy" data-reveal style={{ alignSelf: "start" }}>
            <p className="zip-section-label">Sobre mim</p>
            <h2>
              Uma escuta atenta à <em>sua história.</em>
            </h2>
            <p>
              Olá, sou Gabriela Almeida, bacharel em Psicologia pela
              Universidade de Mogi das Cruzes (UMC). Atuo na clínica psicológica
              desde 2020, ano da minha formação. Minha prática é fundamentada
              na Logoterapia, abordagem desenvolvida por Viktor Frankl, que tem
              como eixo central a pessoa e a busca pelo sentido da vida.
            </p>
            <MoreDetails label="Conheça mais sobre mim">
              <p>
                No atendimento psicológico sob a perspectiva logoterapêutica,
                meu objetivo é te auxiliar a encontrar significado mesmo diante
                de situações desafiadoras. O processo terapêutico envolve a
                identificação de valores, propósitos e possibilidades de escolha,
                favorecendo a superação de obstáculos e a construção de uma
                existência mais consciente, autêntica e significativa.
              </p>
              <p>
                Se você sente que é hora de olhar para si com mais cuidado e
                encontrar novos sentidos para a sua história, estou aqui para
                caminhar com você nesse processo.
              </p>
            </MoreDetails>
          </div>
        </div>
      </section>

      <section id="abordagem" className="zip-approach">
        <div className="zip-narrow">
          <div className="zip-section-intro" data-reveal>
            <p>Minha abordagem</p>
            <h2>Logoterapia: um olhar para o sentido na vida.</h2>
            <div className="zip-section-description">
              “O sentido da vida não pode ser dado; ele precisa ser descoberto.”
              <br />— Viktor E. Frankl
            </div>
          </div>
          <div className="zip-approach-body">
            <div className="zip-approach-copy">
              <div className="zip-columns">
                <article data-reveal>
                  <span>01</span>
                  <h3>Sem julgamentos</h3>
                  <p>Fale sobre o que vive, mesmo sem saber por onde começar.</p>
                </article>
                <article data-reveal>
                  <span>02</span>
                  <h3>No seu tempo</h3>
                  <p>Um processo individual, construído em conjunto.</p>
                </article>
                <article data-reveal>
                  <span>03</span>
                  <h3>Online e presencial</h3>
                  <p>Atendimento individual para adultos e idosos, presencial em Arujá, São Paulo, ou online para todo o mundo.</p>
                </article>
              </div>
            </div>
            <div className="zip-approach-photo" data-reveal>
              <RevealImage
                src="/images/gabriela-livro.webp"
                alt="Gabriela Almeida segurando um livro de Viktor Frankl sobre Logoterapia"
                width={1400}
                height={2100}
                sizes="(max-width: 700px) 85vw, 360px"
                quality={88}
              />
            </div>
          </div>
          <div data-reveal>
            <MoreDetails label="Entenda melhor a Logoterapia" centered>
              <p>
              A Logoterapia, desenvolvida pelo psiquiatra e neurologista
              austríaco Viktor E. Frankl, é uma abordagem psicoterapêutica que
              coloca a busca por sentido no centro da experiência humana. Frankl
              desenvolveu suas ideias ao longo de sua trajetória profissional e
              consolidou a Logoterapia como uma abordagem voltada à compreensão
              da pessoa em sua totalidade, considerando sua liberdade,
              responsabilidade e capacidade de encontrar sentido mesmo diante
              das dificuldades da vida.
              </p>
              <p>
              Na clínica, a Logoterapia não busca oferecer respostas prontas
              sobre qual deve ser o sentido da vida de alguém. O sentido é
              singular e precisa ser descoberto por cada pessoa. O processo
              terapêutico é um espaço para olhar para a própria história,
              compreender o que está sendo vivido, reconhecer possibilidades e
              refletir sobre escolhas, valores e aquilo que realmente importa.
              </p>
              <p>
              A partir desse olhar, a psicoterapia pode ajudar a pessoa a
              construir uma relação mais consciente com sua própria existência,
              encontrando novas possibilidades de ação e posicionamento diante
              das circunstâncias que enfrenta.
              </p>
              <p>
              Em cada história, existe uma pessoa única. E é a partir dessa
              singularidade que o caminho terapêutico é construído.
              </p>
            </MoreDetails>
          </div>
        </div>
      </section>

      <section
        className="zip-google-reviews"
        aria-labelledby="avaliacoes-titulo"
      >
        <div className="zip-narrow">
          <div className="zip-reviews-heading" data-reveal>
            <div>
              <p className="zip-section-label">Avaliações no Google</p>
              <h2 id="avaliacoes-titulo">Palavras de quem passou por aqui.</h2>
            </div>
            <div className="zip-google-summary">
              <strong>{siteConfig.googleReviews.rating}</strong>
              <div>
                <span role="img" aria-label="5 de 5 estrelas">
                  ★★★★★
                </span>
                <p>{siteConfig.googleReviews.count} avaliações no Google</p>
              </div>
            </div>
          </div>
          <div className="zip-review-grid">
            {siteConfig.googleReviews.excerpts.map((review) => (
              <article className="zip-review-card" key={review.author} data-reveal>
                <span
                  className="zip-review-stars"
                  role="img"
                  aria-label="5 de 5 estrelas"
                >
                  ★★★★★
                </span>
                <blockquote>“{review.text}”</blockquote>
                <div className="zip-review-meta">
                  <span>{review.author}</span>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ler no Google ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="zip-reviews-footnote" data-reveal>
            <span>
              Trechos de avaliações públicas · consultadas em{" "}
              {siteConfig.googleReviews.checkedAt}
            </span>
            <a
              href={siteConfig.googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todas as avaliações no Google ↗
            </a>
          </div>
        </div>
      </section>

      <section id="contato" className="zip-contact">
        <div className="zip-contact-inner">
          <div className="zip-contact-copy" data-reveal>
            <p>Vamos conversar?</p>
            <h2>Seu espaço de escuta começa aqui.</h2>
            <p className="zip-contact-description">
              Entre em contato para agendar sua consulta presencial em Arujá,
              São Paulo, ou online, de onde estiver no mundo.
            </p>
            <address>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <br />
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.phone}
              </a>
              <br />
              Presencial em Arujá, São Paulo · Online para todo o mundo
            </address>
          </div>
          <div className="zip-contact-action" data-reveal>
            <Image src="/assets/mark.png" alt="" width={120} height={120} />
            <Link
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="zip-primary-button"
            >
              Agende seu atendimento pelo WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <footer className="zip-footer">
        <div>
          <span className="zip-footer-brand">
            <Image src="/assets/mark.png" alt="" width={32} height={32} />{" "}
            Gabriela Almeida · Psicóloga Clínica · CRP 06/177348
          </span>
          <nav aria-label="Redes sociais">
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
