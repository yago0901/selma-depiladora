"use client";
import { useState } from "react";
import { IconArrow } from "@/components/icons";

const reviews = [
  {
    name: "Paloma Neres",
    photo: "paloma-neres.webp",
    stars: 5,
    text: "Que experiência maravilhosa, a Selma é uma profissional encantadora e amei o serviço dele, ela passa uma tranquilidade para nós clientes e ficamos super tranquilo com a depilação e depois ela te passa indicação para sua pele prevenir de foliculite. Gente eu recomendo ela é nota 1.000, vale a pena conhecer o serviço dela.",
  },
  {
    name: "Maria Cristina Pires",
    photo: "maria-cristina-pires.webp",
    stars: 5,
    text: "A Selma é ótima profissional, preço justo, produtos que não causam alergia. Voltarei mais vezes.",
  },
  {
    name: "Divina Laurindo",
    photo: "divina-laurindo.webp",
    stars: 5,
    text: "Excelente atendimento, preço justo e produtos de ótima qualidade!!! Amei e super recomendo, tanto depilação quanto protocolo para diminuir as estrias 😍",
  },
  {
    name: "LM",
    photo: "LM.webp",
    stars: 5,
    text: "Recomendo. Uma grande profissional, trabalho impecável. Todas a mulheres daqui de casa recomendam muito!",
  },
  {
    name: "Giovanna de Melo",
    photo: "giovanna-de-melo.webp",
    stars: 5,
    text: "Ótimo atendimento, excelente profissional, depilação impecável e o tratamento para estrias aprovado. Recomendo!!! :)",
  },
];

function Avatar({ name, photo }) {
  const [failed, setFailed] = useState(false);
  if (!photo || failed) {
    return (
      <span className="review-avatar fallback" aria-hidden="true">
        {name.trim()[0].toUpperCase()}
      </span>
    );
  }
  return (
    <img
      className="review-avatar"
      src={photo}
      alt={`Foto de ${name}`}
      onError={() => setFailed(true)}
    />
  );
}

export default function Testimonials() {
  const [k, setK] = useState(0);
  const n = reviews.length;
  const go = (v) => setK((prev) => (prev + v + n) % n);

  return (
    <div className="carousel">
      <div className="carousel-window">
        <div className="carousel-track" style={{ transform: `translateX(-${k * 100}%)` }}>
          {reviews.map((r) => (
            <div className="carousel-slide" key={r.name}>
              <div className="review">
                <div className="review-top">
                  <span className="stars" aria-label={`${r.stars} estrelas`}>
                    {"★".repeat(r.stars)}
                  </span>
                  <span className="gbadge">Avaliação no Google</span>
                </div>
                <p className="review-text">“{r.text}”</p>
                <div className="review-who">
                  <Avatar name={r.name} photo={r.photo} />
                  <div>
                    <strong>{r.name}</strong>
                    <small>Cliente</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow prev" aria-label="Avaliação anterior" onClick={() => go(-1)}>
        <IconArrow width={18} height={18} />
      </button>
      <button className="carousel-arrow next" aria-label="Próxima avaliação" onClick={() => go(1)}>
        <IconArrow width={18} height={18} />
      </button>

      <div className="carousel-dots">
        {reviews.map((r, i) => (
          <button
            key={r.name}
            className={`dot ${i === k ? "active" : ""}`}
            aria-label={`Ir para a avaliação de ${r.name}`}
            onClick={() => setK(i)}
          />
        ))}
      </div>
    </div>
  );
}