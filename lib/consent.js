"use client";
import { useEffect, useState } from "react";

const KEY = "cookie-consent-v1";

export function readConsent() {
  try {
    return localStorage.getItem(KEY); // "accepted" | "declined" | null
  } catch {
    return null;
  }
}

export function saveConsent(value) {
  try {
    if (value) localStorage.setItem(KEY, value);
    else localStorage.removeItem(KEY);
  } catch {}
  window.dispatchEvent(new Event("consent-change"));
}

// undefined = ainda não carregou (evita erro de hidratação)
export function useConsent() {
  const [consent, setConsent] = useState(undefined);
  useEffect(() => {
    const sync = () => setConsent(readConsent());
    sync();
    window.addEventListener("consent-change", sync);
    return () => window.removeEventListener("consent-change", sync);
  }, []);
  return consent;
}