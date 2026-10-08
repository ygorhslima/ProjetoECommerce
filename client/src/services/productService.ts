/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINTS } from "../constants/endpoints";
import type { Category } from "../interfaces/Category";
import type { Product } from "../interfaces/Product";

const getJson = async <T,>(url: string, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Falha ao buscar dados: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};

export const productService = {
  getAll: (signal?: AbortSignal) =>
    getJson<Product[]>(API_ENDPOINTS.PRODUCT, signal),

  getCategories: () => getJson<Category[]>(API_ENDPOINTS.CATEGORY),

  delete: (id: number) =>
    fetch(`${API_ENDPOINTS.PRODUCT}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    }).then((res) => res.ok),

  create: (novoProduto: any) =>
    fetch(`${API_ENDPOINTS.PRODUCT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProduto),
    }).then((res) => res.ok),

  update: (id: number, produtoAtualizado: any) =>{
    console.log("URL sendo chamada: ", API_ENDPOINTS.PRODUCT);
    console.log("Código recebido: ", id);

    return fetch(`${API_ENDPOINTS.PRODUCT}/${id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(produtoAtualizado)
    });
  }
};
