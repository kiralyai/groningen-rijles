// Centralized contact details for Ron Bakker Rijschool
export const CONTACT = {
  name: "Ron Bakker Rijschool",
  city: "Groningen",
  phoneDisplay: "06 48 33 19 92",
  phoneTel: "+31648331992",
  whatsappNumber: "31648331992", // international, no plus, for wa.me link
  email: "info@ronbakkerrijschool.nl",
  street: "Aagje Dekenstraat 20",
  postal: "9721 RT Groningen",
  address: "Aagje Dekenstraat 20, 9721 RT Groningen",
  hours: {
    weekdays: "Ma t/m vr · 08:00 – 18:00",
    saturday: "Za · 09:00 – 14:00",
  },
  kvk: "02083421",
  btw: "NL002192645B45",
  iban: "NL90 SNSB 0896 4591 52",
  rijschoolnummer: "2347H8",
} as const;

export const WHATSAPP_MSG = "Hoi Ron, ik heb interesse in rijlessen in Groningen en wil graag meer informatie.";

export const whatsappLink = (msg: string = WHATSAPP_MSG) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`;
