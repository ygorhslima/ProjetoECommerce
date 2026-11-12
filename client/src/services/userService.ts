import { API_ENDPOINTS } from "../constants/endpoints";

export const userService = {
  getAll: () => fetch(`${API_ENDPOINTS.USER}`).then(res => res.json()),

  delete: (id: number) =>
    fetch(`${API_ENDPOINTS.USER}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    }).then((res) => res.ok),


  create: async (novoUsuario: any) => {
    const response = await fetch(`${API_ENDPOINTS.USER}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoUsuario),
    });

    // Se a resposta não for OK (ex: 400, 404, 500), tenta ler a mensagem do servidor e dispara um erro
    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || "Erro ao cadastrar usuário");
    }

    // Retorna os dados criados (ou json, caso a API retorne o usuário salvo)
    return response.json().catch(() => true);
  },

  update: (id: number, produtoAtualizado: any) => {
    return fetch(`${API_ENDPOINTS.USER}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produtoAtualizado)
    });
  }
};
