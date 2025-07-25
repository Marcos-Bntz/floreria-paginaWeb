import { Product, FilterOptions } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Ramo de Rosas Rojas",
    description:
      "Hermoso ramo de 12 rosas rojas con follaje decorativo y papel elegante. Perfecto para expresar amor y pasión en ocasiones especiales.",
    price: 599,
    imageUrl:
      "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ramos",
    style: "romántico",
    occasion: "aniversario",
    colors: ["rojo"],
    inStock: true,
    stockQuantity: 15,
    featured: true,
  },
  {
    id: "2",
    name: "Arreglo Primaveral",
    description:
      "Arreglo con flores de temporada en tonos pastel. Incluye gerberas, tulipanes y lirios. Ideal para alegrar cualquier espacio.",
    price: 850,
    imageUrl:
      "https://images.pexels.com/photos/6551854/pexels-photo-6551854.jpeg",
    category: "arreglos",
    style: "moderno",
    occasion: "cumpleaños",
    colors: ["rosa", "amarillo", "blanco"],
    inStock: true,
    stockQuantity: 8,
    featured: true,
  },
  {
    id: "3",
    name: "Corona Fúnebre Clásica",
    description:
      "Corona de condolencias con claveles blancos, crisantemos y follaje verde. Un detalle respetuoso para expresar condolencias.",
    price: 1250,
    imageUrl:
      "https://images.pexels.com/photos/6321253/pexels-photo-6321253.jpeg",
    category: "coronas",
    style: "clásico",
    occasion: "condolencias",
    colors: ["blanco", "verde"],
    inStock: true,
    stockQuantity: 5,
  },
  {
    id: "4",
    name: "Centro de Mesa Rústico",
    description:
      "Hermoso centro de mesa con flores silvestres y elementos rústicos para decorar tu mesa. Perfecto para eventos especiales.",
    price: 780,
    imageUrl:
      "https://images.pexels.com/photos/5745371/pexels-photo-5745371.jpeg",
    category: "centros",
    style: "rústico",
    occasion: "decoración",
    colors: ["morado", "azul", "verde"],
    inStock: true,
    stockQuantity: 6,
    featured: true,
  },
  {
    id: "5",
    name: "Bouquet de Novia",
    description:
      "Delicado ramo de novia con rosas blancas, lirios y detalles de gypsophila. Diseñado para hacer inolvidable el día más especial.",
    price: 1800,
    imageUrl:
      "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "bouquets",
    style: "elegante",
    occasion: "bodas",
    colors: ["blanco", "verde"],
    inStock: true,
    stockQuantity: 3,
  },
  {
    id: "6",
    name: "Canasta de Girasoles",
    description:
      "Alegre canasta con girasoles, rosas amarillas y follaje decorativo. Un regalo perfecto para transmitir alegría y buenos deseos.",
    price: 680,
    imageUrl:
      "https://images.pexels.com/photos/7772008/pexels-photo-7772008.jpeg",
    category: "canastas",
    style: "campestre",
    occasion: "cumpleaños",
    colors: ["amarillo", "naranja", "verde"],
    inStock: true,
    stockQuantity: 7,
    featured: true,
  },
  {
    id: "7",
    name: "Planta de Orquídea",
    description:
      "Elegante orquídea phalaenopsis en maceta decorativa. Incluye instrucciones de cuidado. Un regalo duradero y sofisticado.",
    price: 950,
    imageUrl:
      "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "plantas",
    style: "minimalista",
    occasion: "decoración",
    colors: ["blanco", "morado"],
    inStock: true,
    stockQuantity: 10,
  },
  {
    id: "8",
    name: "Ramo de Tulipanes",
    description:
      "Ramo de 20 tulipanes holandeses en tonos variados con envoltorio elegante. Una opción fresca y moderna para cualquier celebración.",
    price: 480,
    imageUrl:
      "https://images.pexels.com/photos/131695/pexels-photo-131695.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ramos",
    style: "moderno",
    occasion: "regalo",
    colors: ["rosa", "rojo", "amarillo"],
    inStock: true,
    stockQuantity: 12,
    featured: true,
  },
  {
    id: "9",
    name: "Arreglo Tropical",
    description:
      "Espectacular arreglo con flores exóticas como aves del paraíso, heliconias y follaje tropical. Un toque de exotismo para tu hogar.",
    price: 1100,
    imageUrl:
      "https://images.pexels.com/photos/2111171/pexels-photo-2111171.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "arreglos",
    style: "tropical",
    occasion: "decoración",
    colors: ["naranja", "rojo", "verde"],
    inStock: true,
    stockQuantity: 4,
  },
  {
    id: "10",
    name: "Terrario de Suculentas",
    description:
      "Hermoso terrario de vidrio con suculentas variadas. Bajo mantenimiento y decorativo, ideal para espacios modernos.",
    price: 580,
    imageUrl:
      "https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "plantas",
    style: "moderno",
    occasion: "regalo",
    colors: ["verde"],
    inStock: true,
    stockQuantity: 8,
    featured: true,
  },
  {
    id: "11",
    name: "Ramo de Flores Silvestres",
    description:
      "Encantador ramo de flores silvestres en tonos variados. Una opción natural y fresca para cualquier ocasión.",
    price: 430,
    imageUrl:
      "https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ramos",
    style: "rústico",
    occasion: "cumpleaños",
    colors: ["azul", "morado", "blanco", "amarillo"],
    inStock: true,
    stockQuantity: 9,
  },
  {
    id: "12",
    name: "Composición de Peonías",
    description:
      "Elegante arreglo de peonías en tonos rosados con eucalipto. Una combinación sofisticada para decorar o regalar.",
    price: 920,
    imageUrl:
      "https://images.pexels.com/photos/2295261/pexels-photo-2295261.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "arreglos",
    style: "elegante",
    occasion: "aniversario",
    colors: ["rosa"],
    inStock: true,
    stockQuantity: 5,
  },
];

export const filterOptions: FilterOptions = {
  styles: [
    "romántico",
    "moderno",
    "clásico",
    "rústico",
    "elegante",
    "campestre",
    "minimalista",
    "tropical",
  ],
  occasions: [
    "aniversario",
    "cumpleaños",
    "condolencias",
    "decoración",
    "bodas",
    "regalo",
  ],
  colors: [
    "rojo",
    "rosa",
    "blanco",
    "amarillo",
    "naranja",
    "morado",
    "azul",
    "verde",
  ],
  categories: [
    "ramos",
    "arreglos",
    "coronas",
    "centros",
    "bouquets",
    "canastas",
    "plantas",
  ],
};
