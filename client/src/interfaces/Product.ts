export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  soldCount: number;
  badge?: string;
}