import "./BarDetails.css"
import logo from "../Imagens/netflix.png"
import { FaRegUser } from "react-icons/fa6";
import {Link} from 'react-router-dom'

function BarDetails (){

    return(

        <div className="bar-details">
            <div className="navegue">
                <img src={logo} class="imagem"></img>
                <Link to="/home">
                    <a className="link">Início</a>
                </Link>
                <a className="link">Séries</a>
                <a className="link">Filmes</a>
                <a className="link">Bombando</a>
                <a className="link">Minha lista</a>
                <a className="link">Navegue por idiomas</a>
            </div>

            <div className="conta">
                <FaRegUser />

                <Link to ="/config">
                    <a className="linkconta">Conta</a>
                </Link>

            </div>

        </div>
    )
}

export default BarDetails;