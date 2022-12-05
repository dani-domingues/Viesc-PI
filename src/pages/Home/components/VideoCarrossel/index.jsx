import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import { StyledVideoCarrossel } from "./videoCarrossel-styled"

const VideoCarrossel = () => {

    const videoProperites = [
        {
            id: 1,
            title: "Aprendendo a multiplicar - Multiplicação",
            src: "https://www.youtube.com/watch?v=LPJZn9q6mHI&t=25s",
            
        },
        {
            id: 2,
            title: "Substantivos Coletivos",
            src: "https://www.youtube.com/watch?v=FOQL6-7g2Mg",
            
        },

        {
            id: 3,
            title: "Como fazer conta de dividir passo a passo",
            src: 'https://www.youtube.com/watch?v=mWLp20ptbSI',
           
        },
        {
            id: 4,
            title: "SINÔNIMOS E ANTÔNIMOS",
            src: 'https://www.youtube.com/watch?v=seAN1_Tg5HI',
           
        },
        {
            id: 5,
            title: "A Atmosfera - Camadas da Terra",
            src: 'https://www.youtube.com/watch?v=p7fYXt-_K9Q',
           
        },
        {
            id: 6,
            title: "Verbos",
            src: 'https://www.youtube.com/watch?v=KmNaSOZ9kb0',
           
        },
        {
            id: 7,
            title: "Identificar Retângulos",
            src: 'https://www.youtube.com/watch?v=Uxm-TqbSnh8',
           
        },
        {
            id: 2,
            title: "ELETRICIDADE para crianças ⚡ Episódio 3 💡 Crie um circuito 🔌 Materiais condutores e isolantes",
            src: 'https://www.youtube.com/watch?v=4bGW7FK1-NE',
            
        },
    ]


    return (
        <StyledVideoCarrossel>
            <Carousel>
                {videoProperites.map((videoObj) => {
                    return (
                        <Carousel.Item key={videoObj.id} interval={1000000} pause='hover'>
                            <ReactPlayer
                                url={videoObj.src}
                                pip={true}
                                controls={true}
                                playing={true}
                            />
                            {/* <Carousel.Caption>
                                <h3>{videoObj.title}</h3>
                                <p>{videoObj.credit}</p>
                            </Carousel.Caption> */}

                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </StyledVideoCarrossel>
    )

};

export default VideoCarrossel;