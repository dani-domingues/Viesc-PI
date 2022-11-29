import styled from 'styled-components';


export const StyledVideoCarrossel= styled.div`
    width: 600px;
    height: 380px;
    margin: auto;

    .carousel-control-prev{
        height: 300px;
    }
    .carousel-control-next{
        height: 300px;
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