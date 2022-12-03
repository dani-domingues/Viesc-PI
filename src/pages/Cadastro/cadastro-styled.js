import styled from "styled-components";

export const StyledCadastro = styled.div`

    background-color: #fff;
    padding: 30px;
    max-width: 340px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    font-family: sans-serif;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #CFE0F6;
    color:#262627;
    
    
    p {
        margin-top: 10px;
        font-size: 13px;
        color: #262627;
        margin-bottom: 40px;

    }
    h1{
        font-size: 24px;
    }

    .organize{
        display: flex;
        margin-left: 25px;
        margin-top: 10px;
        

        a{
            color: #D90479;
            size: 100px;
            margin-top: -1px;
            margin-right: 10px;
        }
    }

    img{
        width: 25px;
        margin-right: 10px;
    }

    div{
        margin-top: 3px;
    }
    .logo{
        width: 300px;
        margin-top: -30px;
        margin-bottom: -40px;

    }

    .form-input{
        text-align: left;


        label{
            display: block;
            color:#D90479;
            font-weight: bold;
        }
        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 2px solid #0762D9;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:hover{
                border: 2px solid #05C7F2;
            }
        }
    }

    .footerLogin{
        font-size: 16px;
        a{
            font-weight: bold;
            margin-left: 5px;
            color: #D90479;
            transition: 0.4s;
            cursor: pointer;

            &:hover{
                color:#D9065644
            }
        }
    }

`;