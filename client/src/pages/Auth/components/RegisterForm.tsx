import { Link } from "react-router-dom"
import "../style.css"
import { useState } from "react";
import type { User } from "../../../interfaces/User";

interface registerFormProps {
    onAddUser: (user: Omit<User, "id">) => Promise<boolean>;
}

export default function RegisterForm({onAddUser}:registerFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [password_hash, setPasswordHash] = useState("");

    const handleSubmit = async()=>{
        const success = await onAddUser({
            name,
            email,
            phone_number,
            password_hash
        });
        if(success){
            alert("Usuario cadastrado com sucesso!");
        }
    }

    return (
        <div className="container-form">
            <h1 className="form-title">Cadastrar</h1>

            <div className="content-input">
                <input
                    type="text"
                    placeholder="Nome do usuário"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    className="form-input"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="tel" 
                    placeholder="Número de Telefone" 
                    className="form-input"
                    value={phone_number}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Digite uma senha" 
                    className="form-input"
                    value={password_hash} 
                    onChange={(e)=>setPasswordHash(e.target.value)}
                />
                <button className="form-btn" onClick={handleSubmit}>Cadastrar-se</button>
            </div>

            <p className="form-link">Já é um cliente da ShopTech? <Link to={"/login"}>Login</Link> </p>
        </div>
    )
}