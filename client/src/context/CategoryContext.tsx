import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import type { Category } from "../interfaces/Category";
import { productService } from "../services/productService";

interface CategoryContextData {
  category: Category[];
  loadingCategory: boolean;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData,
);

export default function CategoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [category, setCategory] = useState<Category[]>([]);
  const [loadingCategory, setLoadingCategory] = useState(true);

  useEffect(() => {
    productService
      .getCategories()
      .then(setCategory)
      .catch((error: unknown) =>
        console.error("Erro ao buscar categorias: ", error),
      )
      .finally(() => setLoadingCategory(false));
  }, []);

  return (
    <CategoryContext.Provider value={{ category, loadingCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCategory = () => useContext(CategoryContext);
