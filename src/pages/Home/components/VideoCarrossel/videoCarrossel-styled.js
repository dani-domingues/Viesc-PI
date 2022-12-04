import styled from 'styled-components';


export const StyledVideoCarrossel= styled.div`
    width: auto;
    height:auto;
    margin: auto;
    margin-top: 20px;
    border-radius: 5%;
    margin-bottom: 30px;
    

    .carousel-control-prev{
        height: 300px;
        width: -10px;
    }
    .carousel-control-next{
        height: 300px;
        width: -10px;
    }
    
    .carousel .carousel-control-prev-icon{
        visibility: hidden;
    }
    .carousel:hover .carousel-control-prev-icon{
        visibility: visible;
    }

    .carousel .carousel-control-next-icon{
        visibility: hidden;
    }
    .carousel:hover .carousel-control-next-icon{
        visibility: visible;
    }


`;