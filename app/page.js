import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { site, whatsappLink, mapsLink } from "@/lib/site";
import {
  IconHands, IconLeaf, IconDrop, IconSpark, IconGrad, IconUser, IconHeart,
  IconWhats, IconArrow, IconPin, IconClock,
} from "@/components/icons";
import ResultsStack from "@/components/ResultsStack";

import ConsentMap from "@/components/ConsentMap";
import { CookieSettingsButton } from "@/components/CookieConsent";
import Link from "next/link";

const services = [
  {
    icon: IconSpark,
    title: "Epilação com Cera Elástica",
    text: "Feita com cera elástica pelo método espanhol: uma técnica delicada e completa, pensada para respeitar a sua pele.",
  },
  {
    icon: IconDrop,
    title: "Clareamento de Axila e Virilha",
    text: "Cuidado para uniformizar o tom da pele nessas regiões, com atendimento discreto e acolhedor.",
  },
  {
    icon: IconHands,
    title: "Tratamento de Estrias",
    text: "Tratamento com Microderme para melhorar a aparência das estrias, com 7 anos de experiência.",
  },
];

const benefits = [
  { icon: IconGrad, title: "19 anos de técnica", text: "Experiência de verdade em cada sessão, com domínio de cada detalhe do procedimento." },
  { icon: IconHeart, title: "Sempre estudando", text: "Estudante de Estética e Cosmética, unindo a prática de muitos anos ao conhecimento atualizado." },
  { icon: IconUser, title: "Atendimento só seu", text: "Cada sessão é individual, feita com atenção, escuta e respeito ao seu tempo." },
  { icon: IconHands, title: "Clientes que voltam", text: "A confiança de quem já conhece o trabalho está nas avaliações do Google." },
];

export default function Home() {
  return (
    <>
      <a id="top" />
      <Nav />

      <header className="hero">
        <div className="hero-grain" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Epilação e estética · {site.city}</span>
            <h1>
              A pele lisinha que você procura, com <em>19 anos</em> de técnica e cuidado.
            </h1>
            <p>
              Epilação com cera elástica no método espanhol, clareamento de axila e virilha
              e tratamento de estrias, com quem entende de pele lisinha e bem cuidada.
            </p>
            <div className="hero-actions">
              <a className="btn btn-wa" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Quero agendar minha sessão <IconArrow width={18} height={18} />
              </a>
              <a className="btn btn-ghost" href="#servicos">Ver serviços</a>
            </div>
          </div>


          <Reveal delay={200} variant="zoom" className="hero-visual">
            <div className="hero-frame">
              <img src="/selma-hero.webp" alt="Selma sorrindo, especialista em depilação e estética" />
            </div>
          </Reveal>
        </div>

        <div className="hero-stats">
          <div><div className="num">19 anos</div><div className="lbl">de experiência</div></div>
          <div><div className="num">Cera elástica</div><div className="lbl">método espanhol</div></div>
          <div><div className="num">Clareamento</div><div className="lbl">axila e virilha</div></div>
          <div><div className="num">Estrias</div><div className="lbl">7 anos de experiência</div></div>
        </div>
      </header>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <Reveal variant="left" className="about-visual">
            <div className="about-photo">
              <img src="/selma-retrato.webp" alt="Selma, especialista em depilação e estética" />
            </div>
            <div className="about-quote">
              “A Selma é ótima profissional, preço justo, produtos que não causam alergia.”
              <span>Maria Cristina Pires, avaliação no Google</span>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120} className="about-text">
            <span className="eyebrow">Sobre a Selma</span>
            <h2>Cuidado pessoal, com a experiência de quem faz há 19 anos.</h2>
            <p>
              Sou a Selma, epiladora com <strong>19 anos de experiência</strong> e estudante de{" "}
              <strong>Estética e Cosmética</strong>. Trabalho com cera elástica pelo método
              espanhol, clareamento de axila e virilha e, há 7 anos, com tratamento de estrias.
            </p>
            <p>
              Aqui o atendimento é acolhedor e individual: você chega, relaxa e sai com a
              pele lisinha e bem cuidada.
            </p>
            <div className="about-sign">Selma</div>
          </Reveal>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow center">Por que escolher a Selma</span></Reveal>
            <Reveal delay={80}><h2>Um cuidado feito com experiência</h2></Reveal>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <Reveal delay={i * 100} key={b.title} className="benefit">
                <div className="ic"><b.icon /></div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section results" id="resultados">
        <div className="container">
          <div className="section-head">
            <Reveal><h2>Resultados que dão gosto de ver</h2></Reveal>
            <Reveal delay={80}><p>Confira o antes e depois de quem já passou pelas mãos da Selma.</p></Reveal>
          </div>
          <Reveal variant="zoom">
            <ResultsStack />
          </Reveal>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow center">Nossos serviços</span></Reveal>
            <Reveal delay={80}><h2>Cuidados para a sua pele</h2></Reveal>
            <Reveal delay={140}><p>Todos os atendimentos são individuais e adaptados à sua necessidade.</p></Reveal>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal delay={i * 100} key={s.title} className="svc">
                <div className="ic"><s.icon /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a className="svc-link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Saiba mais
                </a>
              </Reveal>
            ))}
          </div>
          <p className="svc-note">Não sabe qual escolher? Fale com a Selma no WhatsApp e ela indica o ideal para você.</p>
        </div>
      </section>

      <section className="section testimonials" id="depoimentos">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow center">O que dizem as clientes</span></Reveal>
            <Reveal delay={80}><h2>Confiança que se repete</h2></Reveal>
          </div>
          <Reveal><Testimonials /></Reveal>
        </div>
      </section>

      <section className="section map" id="localizacao">
        <div className="container">
          <div className="section-head">
            <Reveal><h2>Onde você me encontra</h2></Reveal>
            <Reveal delay={80}><p>{site.address}</p></Reveal>
          </div>
          <Reveal variant="zoom">
            <div className="map-frame">
              <ConsentMap address={site.address} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <Reveal><span className="eyebrow center">Vamos cuidar de você?</span></Reveal>
          <Reveal delay={80}><h2>Sua pele lisinha e bem cuidada, com quem tem 19 anos de experiência</h2></Reveal>
          <Reveal delay={140}><p>Chame a Selma no WhatsApp e escolha o melhor horário para você.</p></Reveal>
          <Reveal delay={200}>
            <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Falar com a Selma <IconArrow width={18} height={18} />
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="footer" id="contato">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand"><span className="mark">Maria Selma</span></div>
              <p className="about-p">
                Epilação e estética com 19 anos de técnica, em um atendimento acolhedor e individual.
              </p>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li style={{ display: "flex", gap: 10 }}>
                  <IconPin width={18} height={18} /> {site.address}
                </li>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: 10 }}>
                    <IconWhats width={18} height={18} /> {site.whatsappDisplay}
                  </a>
                </li>
                <li style={{ display: "flex", gap: 10 }}>
                  <IconClock width={18} height={18} />
                  <span>
                    {site.hours}
                    <br />
                    {site.closed}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4>Agende</h4>
              <ul>
                <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Falar com a Selma</a></li>
                <li><a href={mapsLink()} target="_blank" rel="noopener noreferrer">Ver no mapa</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Maria Selma Depiladora.</span>
            <span>
              <Link href="/politica-de-privacidade" className="cookie-link">Política de privacidade</Link>
              {" · "}
              <CookieSettingsButton />
            </span>
          </div>
        </div>
      </footer>

      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <IconWhats />
      </a>
    </>
  );
}