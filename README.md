# Jade Spa — Massoterapia e Estética

Site institucional de uma página (landing page) em **Next.js 16 (App Router)** + React, sem dependências de UI externas — CSS próprio, fontes Google (Cormorant Garamond + Jost).

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3200`.

Build de produção:

```bash
npm run build
npm start
```

## Onde editar as informações

Todos os dados de contato ficam em [`lib/site.js`](lib/site.js): WhatsApp, endereço, Instagram, horário. **Preencha o número do WhatsApp** (`whatsapp` no formato `55` + DDD + número, só dígitos) e o horário real antes de publicar.

O conteúdo das seções (serviços, benefícios, depoimentos) está em [`app/page.js`](app/page.js), em arrays no topo do arquivo.

## Imagens

Hoje o site usa placeholders elegantes com ícone + legenda indicando qual foto entra em cada lugar. Para colocar uma foto real:

1. Salve a imagem em `public/` (ex.: `public/sala.jpg`).
2. No `app/page.js`, troque o bloco `<div className="ph">…</div>` correspondente por `<img src="/sala.jpg" alt="..." />`.

### O que buscar de imagem (além do logo)

| Local no site | Foto ideal |
|---|---|
| **Hero** (topo) | A sala com a luz violeta acesa e a maca aquecida — vertical, atmosférica |
| **Sobre** | Retrato profissional da Jade (jaleco/uniforme, sorrindo, luz suave) |
| **Ambiente** (galeria, 5 fotos) | 1) sala com luz violeta · 2) maca aquecida + detalhes · 3) elementos espirituais (olho grego, Buda, chakras) · 4) óleos/aromas · 5) sessão em andamento (mãos trabalhando) |
| **Open Graph** (compartilhamento) | Uma imagem 1200×630 com logo + ambiente, salva em `public/og.jpg` |

Dicas de captação: luz baixa e quente, foco em detalhes (velas, plantas, toalhas dobradas, ventosas), fotos horizontais para os cards largos e verticais para os altos. Evite flash — o clima é intimista.
