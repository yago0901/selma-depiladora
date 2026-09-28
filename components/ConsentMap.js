"use client";
import { useConsent, saveConsent } from "@/lib/consent";
import { mapsLink } from "@/lib/site";

export default function ConsentMap({ address }) {
  const consent = useConsent();

  if (consent === "accepted") {
    return (
      <iframe
        title="Mapa do estúdio"
        loading="lazy"
        src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
      />
    );
  }

  return (
    <div className="map-locked">
      <p>Para mostrar o mapa, o Google precisa usar cookies. Você pode permitir ou abrir direto no Google Maps.</p>
      <div className="cookie-actions">
        <button className="btn btn-primary cookie-btn" onClick={() => saveConsent("accepted")}>
          Aceitar e ver o mapa
        </button>
        <a className="btn btn-outline cookie-btn" href={mapsLink()} target="_blank" rel="noopener noreferrer">
          Abrir no Google Maps
        </a>
      </div>
    </div>
  );
}