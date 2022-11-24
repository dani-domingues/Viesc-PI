import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';

import { StyledLogin } from './login-styled';
import { BotaoDeIcone, BotaoDefault } from '../../components/Styled'
import Footer from '../Home/components/Footer'

import Api from '../../Api';

// Quando onReceiveGoogle chegar, nos iremos retornet para o nosso componente, quando o usuario clica no botão (onClick), ele chama a nossa ação, nossa ação executa a api Api.googleLogin, q é para fazer autenticação com o google, e depois pegamos o resultado e mandamos para nosso arquivo App, para fazer a autenticação e executar. Por fim vai pegar o novo usuario e vai gravar/setar e depois mandar o usuario para nossa tela

function Login({onReceiveGoogle}) {

    const actionLoginGoogle = async () =>{
        let result = await Api.googleLogin();

        if (result){
            onReceiveGoogle(result.user);
        }
        else{
            alert('Error');
        }

    }

    return (

    <>
         {/* TELA DE LOGIN
        <BrowserRouter> */}
            <StyledLogin>
                
                <img className="logo" src='../../../logo-viesc.png.png' />
            
                <h1>Faça login e comece a usar</h1>
                

                <BotaoDeIcone>
                    <img src='../../../facebook.png' />
                    <div className="center">Faça login com o Facebook</div>
                </BotaoDeIcone>
                <BotaoDeIcone onClick ={actionLoginGoogle}>
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
                    <Link to="/cadastro"> Cadastre-se</Link>
                </div>

            </StyledLogin>
           
        {/* </BrowserRouter> */}
       </>
    )
}

export default Login;