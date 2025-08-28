import './Atalhos.css'
import { PiExcludeSquareFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { GoCreditCard } from "react-icons/go";
import { SlEnvelopeOpen } from "react-icons/sl";
import { PiDevices } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { FiAlertOctagon } from "react-icons/fi";
import { GoGear } from "react-icons/go";

function Atalhos() {
    
    return(
        <div className='conteudo'>
            
                <span id='ata'>Atalhos</span>

                <div className='atalhos'>
            <div className='alinhamento1'>

                    <div className='sessao'>

                        <div className='tt'>
                            <PiExcludeSquareFill  className='iconesatalhos' /> 
                            <span>Alterar plano</span>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    <div className='sessao'>

                        <div className='tt'>
                            <GoCreditCard className='iconesatalhos'/> 
                            <span>Gerenciar a forma de pagamento</span>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    <div className='sessao'>

                        <div className='tt'>
                            <SlEnvelopeOpen className='iconesatalhos'/> 
                            <div className='infoExtra'>
                                <span>Comprar um acesso de assinante extra</span>
                                <span className='extra'>Compartilhe sua Netflix com alguém que não mora com você</span>
                            </div>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    <div className='sessao'>

                        <div className='tt'>
                            <PiDevices className='iconesatalhos'/> 
                            <span>Gerenciar acesso e aparelhos</span>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    <div className='sessao'>

                        <div className='tt'>
                            <CiLock className='iconesatalhos'/> 
                            <span>Atualizar senhas</span>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    <div className='sessao'>

                        <div className='tt'>
                            <CiFaceSmile className='iconesatalhos'/> 
                            <span>Transferir um perfil</span>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    <div className='sessao'>

                        <div className='tt'>
                            <FiAlertOctagon className='iconesatalhos'/> 
                            <span>Ajustar o controle parental</span>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    <div className='sessao'>

                        <div className='tt'>
                            <GoGear className='iconesatalhos'/> 
                            <div className='infoExtra'>
                                <span>Editar</span>
                                <span className='extra'>Idiomas, legendas, reprodução automática, notificações, privacidade e muito mais</span>
                            </div>
                        </div>

                        <IoIosArrowForward />

                    </div>

                    {/*-----------------------------------------------------------------*/}

                    
                            
                </div>

            </div>

        </div>


    );


}

export default Atalhos;