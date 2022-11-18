import styled from 'styled-components';

export const StyledHeader = styled.header`
    /* display: flex;
    flex-direction: row;
    height: 75px;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
    border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
    align-items: center;
    padding: 0 16px;
    gap: 16px;
    width: 100%; */

    height: 60px;
    background-color: #F29F05;
    color: #fff;
    font-family: sans-serif;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }
    .logo{
        flex: 1;

        img{
            width: 50px;
        }


    }
    nav{
        ul{
            display: flex;
        }
            li{
                list-style: none;
                margin-left: 20px;
            }

    }
    `;