import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Gaming",
    price: 6000000,
    description:
      "Laptop gaming dengan performa tinggi, cocok untuk gaming dan editing.",
    image: "/images/Laptop_Gaming.jpg",
  },
  {
    id: 2,
    name: "PC Gaming",
    price: 10000000,
    description: "PC gaming dengan spesifikasi tinggi untuk gaming berat.",
    image: "/images/PC_Gaming.jpg",
  },
  {
    id: 3,
    name: "Mouse Gaming",
    price: 300000,
    description: "Mouse gaming dengan DPI tinggi dan desain ergonomis.",
    image: "/images/Mouse_Gaming.jpg",
  },
  {
    id: 4,
    name: "Keyboard Gaming",
    price: 500000,
    description: "Keyboard mechanical dengan RGB lighting yang keren.",
    image: "/images/Keyboard_Gaming.jpg",
  },
];
