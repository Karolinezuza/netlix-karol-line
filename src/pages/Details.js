import NaveBar from "../Components/NavBar";
import "./Details.css"

import ivocaLogo from "../Imagens/logoivoc.avif";
import { FaPlay } from "react-icons/fa";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { TbNumber14Small } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";


export default function Details(){

    return(

        <div className="container-details">

            <NaveBar />

            <div className="main-details">

                <div className="container-info-details">
                    <div className="info-details">

                        <img src={ivocaLogo} style={{ width:"500px"}}/>

                        <div className="description-details">
                            <BsHandThumbsUpFill style={{color:"white",height:'25px',width:"25px"}}/>
                            <strong>2021 </strong>
                            <TbNumber14Small style={{color:"black",height:'35px',width:"35px", backgroundColor:"yellow", borderRadius:"6px"}}/>
                            <strong>1h 52m</strong>
                            <FaStar style={{color:"yellow",height:'30px',width:"30px"}}/>
                            <strong>4,2/5,0</strong>

                        </div>
                        <div class='text-details'>
                            <strong>
                                Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.  </strong>
                        </div>

                        <div className="buttons">
                            <div className="button-watch">
                                <FaPlay /> <span> Assistir</span>
                            </div>

                            <div className="button-my-list">
                                <FaCheck /> <span> Minha Lista</span>
                            </div>

                            <div className="liked">
                                <AiFillLike />
                            </div>

                        </div>
                        <div class='text-details'>
                            <div>
                                <strong class="title-details">Estrelando:</strong>
                                <strong> Patrick Wilson, Vera Farmiga, Ruairi O'Connor  </strong>
                            </div>
                            <div>
                                <strong class="title-details">Gêneros:</strong>
                                <strong> Terror, Sobrenatural, Mistério, Suspense   </strong>
                            </div>
                            <div>
                                <strong class="title-details">Cenas e Momentos:</strong>
                                <strong> Assustador, Tenso, Sobrenatural  </strong>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>

                <div className="up-container-details"></div>

            </div>

        </div>

    );

}