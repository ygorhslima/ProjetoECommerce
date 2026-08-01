export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  sold: number;
  badge?: "sale" | "new" | "hot" | "freeship";
  category: string;
}
