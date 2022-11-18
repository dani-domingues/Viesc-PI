import styled from "styled-components";

export const StyledLogin = styled.div`

    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    font-family: sans-serif;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    
    h1{
        font-size: 20px;
    }

    img{
        width: 25px;
        margin-right: 10px;
    }

    div{
        margin-top: 3px;
    }

    .form-input{
        text-align: left;


        label{
            display: block;
        }
        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:hover{
                border: 1px solid #D90479;
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