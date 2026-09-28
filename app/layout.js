import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-serif" });
const sans = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  // TROQUE pelo domínio real da Maria Selma quando tiver
  metadataBase: new URL("https://mariaselmadepiladora.com.br"),
  title: "Maria Selma Depiladora | Zona Norte de São Paulo",
  description:
    "Depilação com cera, design de sobrancelhas, dermaplaning e tratamento de estrias na Zona Norte de São Paulo. Mais de 18 anos de experiência. Agende pelo WhatsApp.",
  keywords: [
    "depiladora zona norte São Paulo",
    "depilação com cera",
    "depilação zona norte SP",
    "design de sobrancelhas",
    "dermaplaning",
    "tratamento de estrias",
    "Maria Selma Depiladora",
  ],
  openGraph: {
    title: "Maria Selma Depiladora | Zona Norte de São Paulo",
    description:
      "A pele lisinha que você procura, com mais de 18 anos de técnica e cuidado. Cera, sobrancelha, dermaplaning e estrias.",
    type: "website",
    locale: "pt_BR",
    siteName: "Maria Selma Depiladora",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Maria Selma Depiladora" }],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#f5ede6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
      <CookieConsent />
    </html>
  );
}