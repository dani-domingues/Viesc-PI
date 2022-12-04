import styled from 'styled-components';

export const StyledHeader = styled.div`

    height: 70px;
    background-color: #0762D9;
    color: #ffff;
    align-items: center;
    
    

    .container{
        margin-left:30px ;
        padding: 5px 2px;
        display: flex;
        align-items: center;
    }

    .logo{
        flex: 1;
        display: flex;
        align-items: center;
        img{
            width: 50px;
            }
        
            .nome{
                width: 95px;
                margin-top:5px;

        }
    }

    nav{
        margin-right:-500px;
        display: flex;

        ul{
            
            display: flex;
            
            
        }
            li{

                list-style: none;
                margin-left: 20px; 
                margin-top : 15px;
                
                a{
                    text-decoration: none;
                    color: #ffff;
                    font-size: 14px;
                    font-weight: bold;

                    &:hover{
                        color: #D90479;
                    }
                }
            }
            .avatar{
                display: flex;
                align-items: center;

                img{
                    width: 35px;
                    border-radius: 20px;
                    margin-left: 40px;
                    margin-right:15px;
                    cursor: pointer;
                }

                label{
                    font-size: 14px;
                    cursor: pointer;
                    color: #ccc;
                }

                @media screen  and (max-width: 600px){
                    label{
                        display: none;
                    }
                }
                    
                }
    }
 
    `;