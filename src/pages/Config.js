import './Config.css';
import MenuLateral from '../Components/MenuLateral';
import BarraConfig from '../Components/BarraConfig';
import Conta from '../Components/Conta'
import Atalhos from '../Components/Atalhos';
import Final from '../Components/Final';

function Config() {
    
    return(
        
        <div className='configuracoes'>
            
            <div>
                <BarraConfig />
            </div>

            <div className='grupo1'>

                    <div>

                        <MenuLateral />

                    </div>

                    <div className='pai-conta'>


                        <Conta />
                        <Atalhos />
                        <Final />

                    </div>  

            </div>
        
        </div>
    );
}

export default Config;