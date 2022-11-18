import styled from "styled-components";

export const BotaoDeIcone = styled.button`
    display: flex;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    background-color:#EBF4FF;
    color: #262627;

    &:hover {
        background-color: #CFE0F6;
    }

    .center {
        text-align: center;
        width: 100%;
    }

`;

export const BotaoDefault = styled(BotaoDeIcone)`
    background-color: #F29F05;
    color: #ffffff;
    display: inline;
    color:#262627;

    &:hover{
        background-color: #D90479;
    }

`;