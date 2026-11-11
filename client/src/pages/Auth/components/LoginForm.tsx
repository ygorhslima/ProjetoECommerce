import { Link } from "react-router-dom"
import "../style.css"
export default function LoginForm(){
    return(
        <div className="container-form">
            <h1 className="form-title">Entrar</h1>

            <div className="content-input">
                <input type="text" placeholder="Número de telefone/Nome do usuário/Email" className="form-input" />
                <input type="text" placeholder="senha" className="form-input" />
                <button className="form-btn">Entrar</button>
            </div>


            <p className="form-link">Novo no ShopTech? <Link to={"/register"}>Cadastrar</Link></p>
        </div>
    )
}