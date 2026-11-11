import { Link } from "react-router-dom"
import "../style.css"

export default function RegisterForm() {
    return (
        <div className="container-form">
            <h1 className="form-title">Cadastrar</h1>

            <div className="content-input">
                <input type="text" placeholder="Nome do usuário" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" />
                <input type="tel" placeholder="Número de Telefone" className="form-input" />
                <input type="text" placeholder="Digite uma senha" className="form-input" />
                <input type="text" placeholder="Digite a senha novamente" className="form-input" />
                <button className="form-btn">Cadastrar-se</button>
            </div>

            <p className="form-link">Já é um cliente da ShopTech? <Link to={"/login"}>Login</Link> </p>
        </div>
    )
}