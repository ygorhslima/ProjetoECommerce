import { useEffect, useState } from "react";
import type { Product } from "../interfaces/Product";
import { productService } from "../services/productService";

const useProduct = (searchTerm = "", idCategory?: string | number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const productData = await productService.getAll(controller.signal);
        setProducts(productData);
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(
            error instanceof Error
              ? error
              : new Error("Não foi possível buscar os produtos."),
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadProducts();
    return () => controller.abort();
  }, []);

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(normalizedSearchTerm);
    const matchesCategory =
      idCategory === undefined ||
      idCategory === "" ||
      product.categoryId === Number(idCategory);

    return matchesSearch && matchesCategory;
  });

  return { products: filteredProducts, loading, error };
};

export default useProduct;
