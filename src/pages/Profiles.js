import "./Profiles.css";

import eleven from '../Imagens/eleven.jpeg';
import lacasa from '../Imagens/lacasa.jpeg';
import kids from '../Imagens/kids.png';
import adiconar from '../Imagens/+.png';
import SelecaoPerfil from "../Components/SelecaoPerfil";

function Profile () {
  
  const usuario1 = {
    nome: 'Karol',
    foto: eleven
    
  };
  const usuario2 = {
    nome: 'dry e emilly',
    foto: lacasa
    
  };
  const perfilkids = {
    nome: 'Kids',
    foto: kids
    
  };
  const adicionarperfil = {
    nome: 'Adicionar Perfil',
    foto: adiconar
    
  };
      
      const usuarios = [usuario1, usuario2, perfilkids, adicionarperfil]
      
      return( 
       <SelecaoPerfil listaDeUsuarios={usuarios}/>
       
      );
};

   

export default Profile;