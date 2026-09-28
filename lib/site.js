export const site = {
  name: "Maria Selma Depiladora",
  city: "Tucuruvi, São Paulo",
  address: "R. Claudino Inácio Joaquim, 314 - Tucuruvi, São Paulo - SP, 02308-130",
  whatsappNumber: "5511974395816",
  whatsappDisplay: "(11) 97439-5816",
  hours: "Terça a sábado, 10h às 18h",
  closed: "Domingo e segunda: fechado",
};

export function whatsappLink(text = "Olá, Selma! Gostaria de agendar uma sessão.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
}