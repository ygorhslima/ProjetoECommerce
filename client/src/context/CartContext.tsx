import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "../interfaces/Product";

export interface CartEntry {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartEntry[];
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  addProduct: (product: Product) => void;
  decreaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartEntry[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addProduct: (product) => {
        setItems((currentItems) => {
          const existingItem = currentItems.find((item) => item.product.id === product.id);

          if (existingItem) {
            return currentItems.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }

          return [...currentItems, { product, quantity: 1 }];
        });
        setIsCartOpen(true);
      },
      decreaseQuantity: (productId) => {
        setItems((currentItems) =>
          currentItems.map((item) =>
            item.product.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        );
      },
      removeProduct: (productId) => {
        setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
      },
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen((isOpen) => !isOpen),
    };
  }, [items, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider.");
  }

  return context;
}
