import React from "react";
import {StyledLogin} from './login-styled';
import {BotaoDeIcone} from '../../components/Styled'


function Login() {



    return (
        <>
        <StyledLogin>
            <h1>Faça o login na sua conta</h1>

            <BotaoDeIcone>
                <img src='../../../facebook.png'/>
                <div>Faça login com o facebook</div> 
            </BotaoDeIcone>
            <BotaoDeIcone>
                <img src='../../../google.png'/>
                <div>Faça login com o Google</div> 
            </BotaoDeIcone>
            Email:   
            <input>
            </input> 
            <br/>
            <br/>
            Senha: 
            <input>
            </input>
        </StyledLogin>


        </>
    )
}

export default Login;