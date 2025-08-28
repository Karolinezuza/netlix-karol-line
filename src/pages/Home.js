import "./Home.css";

import NaveBar from "../Components/NavBar";
import InfoPrinc from "../Components/InfoPrinc";
import Catalogo from "../Components/Catalogo";
import CarroselNum from "../Components/CarroselNum";
import { Link } from "react-router-dom";

//Imagens
import st from "../Imagens/stranger.jpg";
import peak from "../Imagens/peak.jpg";
import suits from "../Imagens/suitscapa.webp";
import umbrella from "../Imagens/theumbrella.jpg";
import kingdom from "../Imagens/theking.jpg";
import lupin from "../Imagens/lupin.jpg";
import round from "../Imagens/round.jpg";
import lacasa from "../Imagens/lacasapapel.jpeg";
import ragnarok from "../Imagens/ragnarok.jpg";
import prisao from "../Imagens/prisao.webp";
import narcos from "../Imagens/narcos.jpeg";
import vadia from "../Imagens/vadia.jpg";

//--------------------
//imagens numeradas
import lupimNum from "../Imagens/lupimNum.png";
import thechosen from "../Imagens/thechosen.jpg";
import stranger from "../Imagens/stVertical.jpeg";
import thegood from "../Imagens/thegoodplace.webp";
import cobrakai from "../Imagens/cobrakai.jpg";
import arrow from "../Imagens/arrow.jpg";
import ratched from "../Imagens/ratched.webp";
import witcher from "../Imagens/thewitcher.jpg";
import atirador from "../Imagens/oatirador.webp";
import dragao from "../Imagens/comotreinar.jpg";


function Home(){

    //filmes carrossel 1
    const filme1 = st;
    const filme2 = peak;
    const filme3 = suits;
    const filme4 = umbrella;
    const filme5 = kingdom;
    const filme6 = lupin;

    //filmes carrosel 2
    const filme7 = round;
    const filme8 = lacasa;
    const filme9 = ragnarok;
    const filme10 = prisao;
    const filme11 = narcos;
    const filme12 = vadia;

    //vetor puxando carrosseis
    const filmes = [filme1, filme2, filme3, filme4, filme5, filme6]
    const filmes2= [filme7, filme8, filme9, filme10, filme11 ,filme12]

    const top1 = thechosen;
    const top2 = lupimNum;
    const top3 = stranger; 
    const top4 = thegood;
    const top5 = cobrakai;
    const top6 = arrow;
    const top7 = ratched;
    const top8 = witcher;
    const top9 = atirador;
    const top10 = dragao;

    const filmesNum = [top1, top2, top3, top4, top5, top6, top7, top8, top9, top10]

    return(

        <div className="tela">
            
            <div className="casa">
                <NaveBar />
                <InfoPrinc />

                <div className="todosFilme">

                    <Link to="/details" style={{display:"block"}}>
                        <Catalogo listadeFilmes={filmes} descricao="Novidades na Netflix"/>
                    </Link>

                    <Catalogo listadeFilmes={filmes2} descricao="Descubra suas próximas hitórias"/>
                    <CarroselNum listaNumerada ={filmesNum}/>

                </div>
            </div>
        
        </div>
    );
}

export default Home;