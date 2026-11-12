import { useState } from "react";
import type { User } from "../interfaces/User";
import { userService } from "../services/userService";

export function useUser(){
    const [users, setUsers] = useState<User[]>([]);

    async function addUser(novoUsuario: Omit<User, "id">): Promise<boolean> {
        try {
            // Se o userService.create for assíncrono, lembre-se do await
            await userService.create(novoUsuario);
            return true;
        } catch (error) {
            console.error("Erro ao criar o usuário", error);
            return false;
        }
    }

    return { users, addUser };
}

export default useUser;