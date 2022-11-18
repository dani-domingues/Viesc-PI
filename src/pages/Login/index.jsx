import React from "react";
import {BrowserRouter, Link} from 'react-router-dom';

import { StyledLogin } from './login-styled';
import { BotaoDeIcone, BotaoDefault } from '../../components/Styled'


function Login() {

    return (
        
            <StyledLogin>
                <h1>Faça o login na sua conta</h1>

                <BotaoDeIcone>
                    <img src='../../../facebook.png' />
                    <div className="center">Faça login com o Facebook</div>
                </BotaoDeIcone>
                <BotaoDeIcone>
                    <img src='../../../google.png' />
                    <div className="center">Faça login com o Google</div>
                </BotaoDeIcone>
                <p>
                    OU
                </p>

                <form>
                    <div className="form-input">
                        <label>Email</label>
                        <input type="email">
                        </input>
                        <br />
                        <label>Senha</label>
                        <input type="password">
                        </input>
                    </div>
                    <BotaoDefault>
                        ENTRAR
                    </BotaoDefault>
                    </form>
                    <div className="footerLogin">
                        Não tem uma conta? 
                        <Link to="/registrar"> Registre-se</Link>
                    </div>
                
            </StyledLogin>
       
    )
}

export default Login;