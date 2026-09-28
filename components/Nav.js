"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { IconMenu } from "@/components/icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Sobre", "#sobre"],
    ["Serviços", "#servicos"],
    ["Depoimentos", "#depoimentos"],
    ["Contato", "#contato"],
  ];

  return (
    <nav className={`nav on-dark ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="mark">Maria Selma</span>
          <span className="sub">Depiladora</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn btn-gold nav-cta"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <IconMenu />
        </button>
      </div>
    </nav>
  );
}
