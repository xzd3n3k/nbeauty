export interface Service {
  name: string;
  duration?: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "thajske-masaze",
    label: "Thajské masáže",
    icon: "🌿",
    services: [
      { name: "Tradiční thajská masáž", duration: "60 min", price: "1 090 Kč" },
      { name: "Tradiční thajská masáž", duration: "90 min", price: "1 290 Kč" },
      { name: "Tradiční thajská masáž", duration: "120 min", price: "1 690 Kč" },
      { name: "Thajská olejová masáž celého těla", duration: "60 min", price: "1 190 Kč" },
      { name: "Thajská olejová masáž celého těla", duration: "90 min", price: "1 490 Kč" },
      { name: "Thajská olejová masáž celého těla", duration: "120 min", price: "1 990 Kč" },
      { name: "Thajská masáž hlavy a obličeje", duration: "30 min", price: "590 Kč" },
      { name: "Thajská masáž zad, hlavy a ramenou", duration: "30 min", price: "590 Kč" },
      { name: "Thajská masáž zad, hlavy a ramenou", duration: "60 min", price: "890 Kč" },
      { name: "Thajská masáž nohou", duration: "30 min", price: "590 Kč" },
      { name: "Thajská masáž nohou (akupresurní)", duration: "60 min", price: "890 Kč" },
    ],
  },
  {
    id: "kosmetika",
    label: "Kosmetika",
    icon: "✨",
    services: [
      { name: "Hydratační & rozjasňující ošetření", duration: "60 min", price: "1 290 Kč", description: "Intenzivní hydratace" },
      { name: "Komplexní konzultace & ošetření", duration: "90 min", price: "1 450 Kč" },
      { name: "Péče problematické pleti", duration: "90 min", price: "1 490 Kč" },
      { name: "Omlazující & liftingové ošetření", duration: "90 min", price: "1 650 Kč" },
    ],
  },
  {
    id: "head-spa",
    label: "Head Spa",
    icon: "💆",
    services: [
      { name: "Head Spa Relax", duration: "60 min", price: "1 290 Kč" },
      { name: "Head Spa Premium", duration: "90 min", price: "1 690 Kč" },
      { name: "Head Spa Deluxe", duration: "120 min", price: "2 090 Kč" },
      { name: "Head Spa Duo (párové)", duration: "", price: "2 250 Kč" },
      { name: "Bukální masáž obličeje", duration: "", price: "1 450 Kč" },
    ],
  },
  {
    id: "prodluzovani-ras",
    label: "Prodlužování řas",
    icon: "👁",
    services: [
      { name: "Doplnění řas", duration: "", price: "od 850 Kč" },
      { name: "Nový set řas", duration: "", price: "od 1 200 Kč" },
      { name: "Luxusní set řas", duration: "", price: "od 1 800 Kč" },
      { name: "Odstranění řas", duration: "", price: "300 Kč" },
    ],
  },
  {
    id: "rasy-a-oboci",
    label: "Řasy a obočí",
    icon: "🌸",
    services: [
      { name: "Úprava obočí", duration: "", price: "400 Kč" },
      { name: "Barvení řas", duration: "", price: "300 Kč" },
      { name: "Laminace obočí", duration: "", price: "950 Kč" },
      { name: "Lash lifting", duration: "", price: "950 Kč" },
    ],
  },
  {
    id: "permanentni-makeup",
    label: "Permanentní make-up",
    icon: "💋",
    services: [
      { name: "Powder brows", duration: "", price: "4 500 Kč" },
      { name: "Korekce powder brows", duration: "", price: "2 000 Kč" },
      { name: "Aquarelle lips", duration: "", price: "5 000 Kč" },
      { name: "Korekce aquarelle lips", duration: "", price: "2 500 Kč" },
    ],
  },
  {
    id: "kadernictvi",
    label: "Kadeřnictví",
    icon: "✂️",
    services: [
      { name: "Pánský střih", duration: "", price: "400 Kč" },
      { name: "Foukaná péče (krátké vlasy)", duration: "", price: "500 Kč" },
      { name: "Foukaná péče (dlouhé vlasy)", duration: "", price: "700 Kč" },
      { name: "Dámský střih s péčí (krátké)", duration: "", price: "750 Kč" },
      { name: "Dámský střih s péčí (dlouhé)", duration: "", price: "950 Kč" },
      { name: "Barvení (krátké)", duration: "", price: "1 000 Kč" },
      { name: "Barvení (dlouhé)", duration: "", price: "1 400 Kč" },
      { name: "Melír", duration: "", price: "od 1 200 Kč" },
      { name: "Balayage", duration: "", price: "od 1 600 Kč" },
      { name: "Brazilský keratin", duration: "", price: "od 2 500 Kč" },
    ],
  },
  {
    id: "pedikura",
    label: "Pedikúra",
    icon: "🦶",
    services: [
      { name: "Deluxe Footlogix", duration: "", price: "600 Kč" },
      { name: "Deluxe s barvou", duration: "", price: "750 Kč" },
      { name: "Luxury americký styl", duration: "", price: "990 Kč" },
    ],
  },
  {
    id: "modelaz-nehtu",
    label: "Modeláž nehtů",
    icon: "💅",
    services: [
      { name: "Manikúra CND Shellac", duration: "", price: "650 Kč" },
      { name: "Nová modeláž nehtů", duration: "", price: "650 Kč" },
      { name: "Doplnění modeláže", duration: "", price: "600 Kč" },
      { name: "Nail art design", duration: "", price: "800 Kč/hod" },
      { name: "Manikúra Luxury Spa", duration: "", price: "600 Kč" },
    ],
  },
];
