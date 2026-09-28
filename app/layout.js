import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-serif" });
const sans = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL("https://mariaselmadepiladora.com.br"),
  title: "Maria Selma Depiladora | Tucuruvi, São Paulo",
  description:
    "Epilação com cera elástica (método espanhol), clareamento de axila e virilha e tratamento de estrias no Tucuruvi, São Paulo. 19 anos de experiência. Agende pelo WhatsApp.",
  keywords: [
    "depiladora Tucuruvi",
    "epilação com cera elástica",
    "método espanhol",
    "clareamento de axila e virilha",
    "tratamento de estrias",
    "depilação zona norte São Paulo",
    "Maria Selma Depiladora",
  ],
  openGraph: {
    title: "Maria Selma Depiladora | Tucuruvi, São Paulo",
    description:
      "A pele lisinha que você procura, com 19 anos de técnica e cuidado. Cera elástica, clareamento e tratamento de estrias.",
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