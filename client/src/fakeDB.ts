import type { Category } from "./interfaces/Category";
import type { Product } from "./interfaces/Product";

export const CATEGORIES: Category[] = [
  { id: "fashion", name: "Moda", icon: "👗", color: "#ff6b6b" },
  { id: "electronics", name: "Eletrônicos", icon: "📱", color: "#4ecdc4" },
  { id: "home", name: "Casa", icon: "🏠", color: "#45b7d1" },
  { id: "beauty", name: "Beleza", icon: "💄", color: "#f7b731" },
  { id: "sports", name: "Esportes", icon: "⚽", color: "#26de81" },
  { id: "books", name: "Livros", icon: "📚", color: "#a55eea" },
  { id: "food", name: "Alimentos", icon: "🍎", color: "#fd9644" },
  { id: "toys", name: "Brinquedos", icon: "🎮", color: "#fc5c65" },
  { id: "pets", name: "Pet Shop", icon: "🐾", color: "#45aaf2" },
  { id: "auto", name: "Automotivo", icon: "🚗", color: "#2bcbba" },
];

export const BANNERS = [
  {
    id: 1,
    title: "Mega Ofertas de Verão",
    subtitle: "Até 70% OFF em produtos selecionados",
    cta: "Aproveitar Agora",
    bg: "linear-gradient(135deg, #1a6b5a 0%, #2da882 100%)",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop&auto=format",
    align: "left" as const,
  },
  {
    id: 2,
    title: "Novos Eletrônicos",
    subtitle: "As melhores marcas com frete grátis",
    cta: "Ver Produtos",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    image:
      "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=800&h=400&fit=crop&auto=format",
    align: "right" as const,
  },
  {
    id: 3,
    title: "Moda Feminina",
    subtitle: "Coleção nova toda semana",
    cta: "Explorar",
    bg: "linear-gradient(135deg, #6c3483 0%, #a569bd 100%)",
    image:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&h=400&fit=crop&auto=format",
    align: "left" as const,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Camiseta Básica Premium Slim Fit Algodão 100%",
    price: 49.9,
    originalPrice: 89.9,
    image:
      "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=400&h=400&fit=crop&auto=format",
    rating: 4.8,
    reviews: 2341,
    sold: 5200,
    badge: "sale",
    category: "fashion",
  },
  {
    id: 2,
    name: "Fone de Ouvido Bluetooth 5.0 Com Cancelamento de Ruído",
    price: 179.9,
    originalPrice: 299.9,
    image:
      "https://images.unsplash.com/photo-1515940175183-6798529cb860?w=400&h=400&fit=crop&auto=format",
    rating: 4.6,
    reviews: 891,
    sold: 1540,
    badge: "hot",
    category: "electronics",
  },
  {
    id: 3,
    name: "Mouse Gamer Sem Fio 25600 DPI RGB Recarregável",
    price: 129.9,
    originalPrice: 199.9,
    image:
      "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?w=400&h=400&fit=crop&auto=format",
    rating: 4.9,
    reviews: 3120,
    sold: 8900,
    badge: "freeship",
    category: "electronics",
  },
  {
    id: 4,
    name: "Jaqueta Feminina Impermeável Windbreaker Colorblock",
    price: 219.9,
    originalPrice: 349.9,
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=400&fit=crop&auto=format",
    rating: 4.7,
    reviews: 654,
    sold: 2100,
    badge: "new",
    category: "fashion",
  },
  {
    id: 5,
    name: 'Notebook Ultra Slim 15.6" Intel Core i5 8GB 256GB SSD',
    price: 2499.0,
    originalPrice: 3299.0,
    image:
      "https://images.unsplash.com/photo-1636115305669-9096bffe87fd?w=400&h=400&fit=crop&auto=format",
    rating: 4.5,
    reviews: 421,
    sold: 780,
    badge: "sale",
    category: "electronics",
  },
  {
    id: 6,
    name: "Conjunto Moda Casual Calça + Blusa Estampada Feminino",
    price: 89.9,
    originalPrice: 139.9,
    image:
      "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?w=400&h=400&fit=crop&auto=format",
    rating: 4.4,
    reviews: 1205,
    sold: 3400,
    badge: "freeship",
    category: "fashion",
  },
  {
    id: 7,
    name: "Suporte Ergonômico Monitor Duplo Ajustável Articulado",
    price: 159.9,
    originalPrice: 229.9,
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=400&h=400&fit=crop&auto=format",
    rating: 4.3,
    reviews: 330,
    sold: 910,
    badge: "new",
    category: "home",
  },
  {
    id: 8,
    name: "Tênis Esportivo Masculino Running Amortecimento Extra Leve",
    price: 189.9,
    originalPrice: 289.9,
    image:
      "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=400&h=400&fit=crop&auto=format",
    rating: 4.8,
    reviews: 4520,
    sold: 12300,
    badge: "hot",
    category: "sports",
  },
];

export const FLASH_PRODUCTS: Product[] = [
  {
    id: 101,
    name: "Kit Maquiagem Profissional 16 Cores",
    price: 39.9,
    originalPrice: 99.9,
    image:
      "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=300&h=300&fit=crop&auto=format",
    rating: 4.6,
    reviews: 890,
    sold: 4100,
    badge: "sale",
    category: "beauty",
  },
  {
    id: 102,
    name: "Smartwatch Fitness Band Monitor Cardíaco GPS",
    price: 249.9,
    originalPrice: 499.9,
    image:
      "https://images.unsplash.com/photo-1620783770629-122b7f187703?w=300&h=300&fit=crop&auto=format",
    rating: 4.5,
    reviews: 1230,
    sold: 3200,
    badge: "sale",
    category: "electronics",
  },
  {
    id: 103,
    name: "Vestido Midi Floral Manga Longa Elegante",
    price: 79.9,
    originalPrice: 159.9,
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=300&fit=crop&auto=format",
    rating: 4.7,
    reviews: 670,
    sold: 2800,
    badge: "sale",
    category: "fashion",
  },
  {
    id: 104,
    name: "Carregador Rápido 65W USB-C PD Compacto Viagem",
    price: 59.9,
    originalPrice: 119.9,
    image:
      "https://images.unsplash.com/photo-1602526432604-029a709e131c?w=300&h=300&fit=crop&auto=format",
    rating: 4.8,
    reviews: 2100,
    sold: 7600,
    badge: "sale",
    category: "electronics",
  },
  {
    id: 105,
    name: 'Mochila Impermeável 40L Notebook Até 17" Reforçada',
    price: 119.9,
    originalPrice: 229.9,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop&auto=format",
    rating: 4.9,
    reviews: 3340,
    sold: 9100,
    badge: "sale",
    category: "fashion",
  },
];
