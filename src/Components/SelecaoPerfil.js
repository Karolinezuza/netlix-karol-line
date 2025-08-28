import "./SelecaoPerfil.css";
import BotaoVazado from "./BotaoVazado";
import CardPerfil from "./Card";

function SelecaoPerfil ({listaDeUsuarios}) {

    const listaDeCards = listaDeUsuarios.map(user => <CardPerfil usuario={user} />)

    return(
        
        
        <div className="selecao-perfil">

            <h2>

                Quem está assistindo?
                
            </h2>

            <div className="janelas">

            {listaDeCards}

            </div>

            <BotaoVazado />

        </div>

    );
}

export default SelecaoPerfil;