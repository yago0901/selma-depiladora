"use client";
import Link from "next/link";
import { useConsent, saveConsent } from "@/lib/consent";

export default function CookieConsent() {
  const consent = useConsent();
  if (consent !== null) return null; // só aparece se ainda não escolheu

  return (
    <div className="cookie" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <p className="cookie-title">Sua privacidade importa</p>
      <p className="cookie-text">
        Usamos cookies de terceiros apenas para mostrar o mapa do Google com a localização do
        estúdio. Você escolhe se permite. Saiba mais na{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link>.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-primary cookie-btn" onClick={() => saveConsent("accepted")}>
          Aceitar
        </button>
        <button className="btn btn-outline cookie-btn" onClick={() => saveConsent("declined")}>
          Recusar
        </button>
      </div>
    </div>
  );
}

// Botão para o rodapé: reabre o aviso
export function CookieSettingsButton() {
  return (
    <button type="button" className="cookie-link" onClick={() => saveConsent(null)}>
      Preferências de cookies
    </button>
  );
}