import "./DetailsMovie.css"

import { FaStar } from "react-icons/fa6";
import { Md18UpRating } from "react-icons/md"
import { BsHandThumbsUpFill } from "react-icons/bs";
import peaklogo from "../Imagens/logopeak.png";

function DetailsMovie(){

    return(

        <>
            <img src={peaklogo} style={{height:"250px", width:"300px"}}/>
            
                                    <div className="description-details">
                                        <BsHandThumbsUpFill style={{color:"white",height:'25px',width:"25px"}}/>
                                        <strong>2017</strong>
                                        <Md18UpRating style={{color:"white",height:'40px',width:"40px"}}/>
                                        <strong>6 Temporadas</strong>
            
                                        <div className="star">
                                            <FaStar style={{color:"yellow",height:'30px',width:"30px"}}/>
                                            <div className="description-start">
                                                <strong>8,7/10</strong>
                                                <strong>727 mil</strong>
                                            </div>
                                        </div>
            
                                    </div>
                                    
                                    <div class='text-details' style={{lineHeight:"1.4"}}>
                                        <strong>Uma notória gangue da inglaterra de 1919 é liderada pelo cruel tommy shelby, um criminoso disposto a subir na vida a qualquer preço.</strong>
                                    </div>
        </>

    )

}

export default DetailsMovie