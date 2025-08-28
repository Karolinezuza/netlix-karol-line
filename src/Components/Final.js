import "./Final.css";
import { IoIosArrowForward } from "react-icons/io";
import onze from "../Imagens/eleven.jpeg";
import papel from "../Imagens/lacasa.jpeg";
import narcos from "../Imagens/narcos.jpeg";
import arrow from "../Imagens/arrow.jpg";
import kids from "../Imagens/kids.png";

function Final () {

    return(
        <div className="conteudo">

            <div className="geren">

                <div className="alinhamento2">

                    <div className="geralFim">
                        <div className="palavras">
                            <span>Gerenciar perfis</span>
                            <span className='extra'>5 perfis</span>

                        </div>
                            <div className="juntos">
                                <div className="cincoPerfil">
                                    <img src={onze} className="fotoFim"></img>
                                    <img src={papel} className="fotoFim"></img>
                                    <img src={narcos} className="fotoFim"></img>
                                    <img src={arrow} className="fotoFim"></img>
                                    <img src={kids} className="fotoFim"></img>
                                </div>
                                    <IoIosArrowForward />
                            </div>
                    </div>

                </div>

            </div>

        </div>




    );




}

export default Final;