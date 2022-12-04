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
            credit: "Smile and Learn - Português"
        },
        {
            id: 2,
            title: "video 2",
            src: './videos/matematica02.mp4',
            credit: "video by Mateflix"
        },
        {
            id: 1,
            title: "video 3",
            src: './videos/portuguese01.mp4',
            credit: "video by PT"
        },
    ]


    return (
        <StyledVideoCarrossel>
            <Carousel>
                {videoProperites.map((videoObj) => {
                    return (
                        <Carousel.Item key={videoObj.id}>
                            <ReactPlayer
                                url={videoObj.src}
                                pip={true}
                                controls={true}
                                playing={true}
                            />
                            <Carousel.Caption>
                                <h3>{videoObj.title}</h3>
                                <p>{videoObj.credit}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </StyledVideoCarrossel>
    )

};

export default VideoCarrossel;