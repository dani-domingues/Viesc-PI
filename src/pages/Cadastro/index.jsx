import React from "react";
import { Link } from 'react-router-dom';

import { StyledCadastro } from "./cadastro-styled";
import { BiChevronLeft } from 'react-icons/bi';
import { BotaoDefault } from '../../components/Styled'

function Cadastro() {

    return (
            <StyledCadastro>
                
                <h1 className="organize"> <Link to="/">< BiChevronLeft size={30}/></Link> Crie sua Conta </h1>
                <p> Cadasto 100% gratuito! </p>
                <form>
                    <div className="form-input">
                    <label>Nome</label>
                        <input type="text">
                        </input>
                        <label>Email</label>
                        <input type="email">
                        </input>
                        <br />
                        <label>Senha</label>
                        <input type="password">
                        </input>
                    </div>
                    <BotaoDefault>
                        COMECE AGORA
                    </BotaoDefault>
                </form>
                <div className="footerLogin">
                    Já tem uma conta?
                    <Link to="/login"> Fazer Login</Link>
                </div>


            </StyledCadastro>

    )
}

export default Cadastro;