import "./Catalogo.css";

function Catalogo ({descricao, listadeFilmes}) {
    
    const catalogodeFilmes = listadeFilmes.map(movie => <img src={movie} className="fotofilme"/>)

    return(

            <div className="minhaLista">

                <span>{descricao}</span>
                
                <div className="carrosel">{catalogodeFilmes}</div>
            
            </div>
      
    );
}

export default Catalogo;