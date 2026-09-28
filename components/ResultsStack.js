"use client";
import { useState } from "react";

// Ajuste título e legenda conforme cada foto
const items = [
  { src: "/resultado-1.webp", title: "Epilação com cera elástica", sub: "Método espanhol", alt: "Resultado de epilação com cera elástica" },
  { src: "/resultado-2.webp", title: "Clareamento de axila e virilha", sub: "Pele mais uniforme", alt: "Resultado de clareamento de axila e virilha" },
  { src: "/resultado-3.webp", title: "Tratamento de estrias", sub: "Microderme", alt: "Resultado de tratamento de estrias" },
  { src: "/resultado-4.webp", title: "Tratamento de estrias", sub: "7 anos de experiência", alt: "Resultado de tratamento de estrias" },
  { src: "/resultado-5.webp", title: "Epilação com cera elástica", sub: "Pele lisinha e bem cuidada", alt: "Resultado de atendimento" },
];

// ângulos fixos (evita erro de hidratação do Next)
const ANGLES = [-6, 5, -3, 7, -5, 4, -7];

export default function ResultsStack() {
  const [k, setK] = useState(0);
  const n = items.length;
  const go = (v) => setK((prev) => (prev + v + n) % n);

  return (
    <div className="rs" style={{ "--n": n, "--k": k }}>
      {items.map((it, i) => (
        <article
          className="rs-item"
          key={it.src}
          style={{ "--i": i, "--a": `${ANGLES[i % ANGLES.length]}deg` }}
        >
          <h3 className="rs-title">{it.title}</h3>
          <p className="rs-sub">{it.sub}</p>
          <img className="rs-img" src={it.src} alt={it.alt} loading="lazy" />
        </article>
      ))}
      <div className="rs-nav">
        <button className="rs-btn" aria-label="Resultado anterior" data-inc="-1" onClick={() => go(-1)} />
        <button className="rs-btn" aria-label="Próximo resultado" data-inc="1" onClick={() => go(1)} />
      </div>
    </div>
  );
}