import React from "react";
import {StyledLogin} from './login-styled';
import {BotaoDeIcone} from '../../components/Styled'


function Login() {



    return (
        <>
        <StyledLogin>
            <h1>Faça o login na sua conta</h1>

            <BotaoDeIcone>Faça login com o facebook</BotaoDeIcone>
        </StyledLogin>


        </>
    )
}

export default Login;