import type { Category } from "./Category";

export interface Product {
  id: number;
  categoryId: number;
  category?: Category;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  soldCount: number;
  badge?: string;
}