export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  price: number | string;
  originalPrice?: number;
  category: "bestseller" | "launch";
  available: boolean;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "10 Calcinhas Anjo",
    shortDescription: "Calcinha fio dental de renda com regulagem de coração, unindo charme e conforto para o dia a dia.",
    price: "PREÇO NÃO DEFINIDO",
    category: "bestseller",
    available: true,
    image: "/images/product-1.jpg",
  },
  {
    id: "2",
    name: "10 Calcinhas de Regulagem",
    shortDescription: "Calcinha de regulagem com laterais em metal que oferece conforto, qualidade e praticidade. Possui fio duplo para zero marcas, forro 100% algodão e tecido macio com elasticidade, vestindo tamanho único (M).",
    price: "PREÇO NÃO DEFINIDO",
    category: "bestseller",
    available: true,
    image: "/images/product-2.jpg",
  },
  {
    id: "3",
    name: "10 Calcinhas de Pala",
    shortDescription: "Calcinha em poliéster de alta qualidade com pala elástica para ajuste perfeito. Modelo fio duplo e forro 100% algodão, garantindo conforto, proteção e sem marcas no dia a dia.",
    price: "PREÇO NÃO DEFINIDO",
    category: "launch",
    available: true,
    image: "/images/product-3.jpg",
  },
  {
    id: "4",
    name: "10 Calcinhas Samanta",
    shortDescription: "Calcinha de renda com detalhe em pingente dando aquele charme, regulagem de coração ajusta no seu corpo perfeitamente.",
    price: "PREÇO NÃO DEFINIDO",
    category: "launch",
    available: true,
    image: "/images/product-4.jpg",
  },
  {
    id: "5",
    name: "10 Calcinhas Mariana",
    shortDescription: "Calcinha de renda, forro 100% algodão, com 2 alças com detalhe de regualagem em coração, perfeita pro dia a dia",
    price: "PREÇO NÃO DEFINIDO",
    category: "launch",
    available: true,
    image: "/images/product-5.jpg",
  },
];
