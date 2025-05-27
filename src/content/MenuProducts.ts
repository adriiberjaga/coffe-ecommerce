import cafeGrano1 from  '../assets/images/cafeGrano1.jpg'
import cafeGrano2 from  '../assets/images/cafeGrano2.jpg'
import cafeGrano3 from  '../assets/images/cafeGrano3.jpg'
import cafeGrano4 from  '../assets/images/cafeGrano4.jpg'
import cafeGrano5 from  '../assets/images/cafeGrano5.jpg'


export interface MenuProductsInterface {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
}

const MenuProducts: MenuProductsInterface[] = [
  {
    id: 1,
    title: "Café Etiopía",
    price: 12.99,
    image: cafeGrano1,
    description: "Café de origen único, con un sabor afrutado y floral.",
    category: "En grano",
    quantity: 50,
  },
  {
    id: 2,
    title: "Café Colombia",
    price: 10.99,
    image: "/images/colombia.png",
    description: "Café suave con notas de caramelo y chocolate.",
    category: "Molido",
    quantity: 40,
  },
  {
    id: 3,
    title: "Cápsulas Intenso",
    price: 8.49,
    image: "/images/capsulas.png",
    description: "Cápsulas compatibles para un espresso de sabor intenso.",
    category: "Cápsulas",
    quantity: 100,
  },
  {
    id: 4,
    title: "Café Perú Orgánico",
    price: 14.99,
    image: cafeGrano2,
    description: "Café orgánico con sabor suave y dulce.",
    category: "En grano",
    quantity: 35,
  },
  {
    id: 5,
    title: "Café Brasil",
    price: 11.50,
    image: "/images/brasil.png",
    description: "Café con cuerpo, perfecto para preparaciones fuertes.",
    category: "Molido",
    quantity: 60,
  },
  {
    id: 6,
    title: "Cápsulas Decaf",
    price: 9.99,
    image: "/images/decaf.png",
    description: "Cápsulas de café sin cafeína para disfrutar en cualquier momento.",
    category: "Cápsulas",
    quantity: 120,
  },
  {
    id: 7,
    title: "Café Costa Rica",
    price: 13.49,
    image: cafeGrano3,
    description: "Café de alta calidad con un sabor limpio y balanceado.",
    category: "En grano",
    quantity: 25,
  },
  {
    id: 8,
    title: "Café Guatemala",
    price: 12.49,
    image: "/images/guatemala.png",
    description: "Notas cítricas y afrutadas en este café de origen Guatemala.",
    category: "Molido",
    quantity: 30,
  },
  {
    id: 9,
    title: "Cápsulas Noche Suave",
    price: 7.99,
    image: "/images/noche.png",
    description: "Cápsulas de sabor suave y equilibrado, perfectas para la noche.",
    category: "Cápsulas",
    quantity: 80,
  },
  {
    id: 10,
    title: "Café México",
    price: 13.99,
    image: cafeGrano4,
    description: "Sabor dulce y cremoso con notas de chocolate.",
    category: "En grano",
    quantity: 45,
  },
  {
    id: 11,
    title: "Café Jamaica Blue Mountain",
    price: 29.99,
    image: cafeGrano5,
    description: "El café más exclusivo del mundo, con un sabor suave y afrutado.",
    category: "En grano",
    quantity: 10,
  },
  {
    id: 12,
    title: "Café Sumatra Mandheling",
    price: 16.99,
    image: "/images/sumatra.png",
    description: "Café de sabor terroso y con cuerpo.",
    category: "Molido",
    quantity: 50,
  },
  {
    id: 13,
    title: "Cápsulas Expresso Forte",
    price: 8.99,
    image: "/images/expresso.png",
    description: "Cápsulas para un espresso fuerte y lleno de sabor.",
    category: "Cápsulas",
    quantity: 90,
  },
  {
    id: 14,
    title: "Café Etiopía Yirgacheffe",
    price: 15.99,
    image: "/images/yirgacheffe.png",
    description: "Café suave y afrutado de una de las regiones más famosas de Etiopía.",
    category: "En grano",
    quantity: 60,
  },
  {
    id: 15,
    title: "Café Kenia AA",
    price: 17.99,
    image: "/images/kenya.png",
    description: "Café de sabor afrutado, balanceado y con acidez.",
    category: "Molido",
    quantity: 40,
  },
  {
    id: 16,
    title: "Café Blue Mountain Blend",
    price: 18.99,
    image: "/images/blue-mountain.png",
    description: "Un blend exclusivo de cafés premium con un sabor único.",
    category: "En grano",
    quantity: 20,
  },
  {
    id: 17,
    title: "Café Taza de Oro",
    price: 9.49,
    image: "/images/taza.png",
    description: "Un café suave con toques de miel y nuez.",
    category: "Molido",
    quantity: 50,
  },
  {
    id: 18,
    title: "Café de la Finca La Loma",
    price: 20.99,
    image: "/images/laloma.png",
    description: "Café de finca orgánica con notas a frutas y nuez.",
    category: "En grano",
    quantity: 15,
  },
  {
    id: 19,
    title: "Café Robusta",
    price: 7.99,
    image: "/images/robusta.png",
    description: "Café de cuerpo robusto y sabor fuerte.",
    category: "Molido",
    quantity: 100,
  },
  {
    id: 20,
    title: "Cápsulas Nespresso Compatibles",
    price: 8.49,
    image: "/images/nespresso.png",
    description: "Cápsulas compatibles con Nespresso para un café rápido.",
    category: "Cápsulas",
    quantity: 200,
  },
  {
    id: 21,
    title: "Café Panamá Geisha",
    price: 39.99,
    image: "/images/panama.png",
    description: "Café premium con un sabor floral y afrutado, de la región de Panamá.",
    category: "En grano",
    quantity: 5,
  },
];


export default MenuProducts;
