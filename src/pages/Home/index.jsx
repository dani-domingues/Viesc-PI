import React, { useState } from "react";
import UserInfo from "./components/UserInfo";
import Header from "./components/Header";
import TimeLine from "./components/TimeLine";
import config from '../../config.json';
import Login from "../Login";
import Footer from './components/Footer'
import { StyledHome } from "./home-styled";
import VideoCarrossel from "./components/VideoCarrossel";



function Home() {

    // Tela de Login
    //   Essa sera retirada, esta aqui apenas para testes
    // const [user, setUser] = useState({
    //     id: 1,
    //     name: 'Daniela Domingues',
    //     photo: 'https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-icone-azul-do-perfil-de-usuario.png'
    // });
    const [ user, setUser] = useState(null);

    // Filtro do Search
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    const actionLoginDataGoogle = (u) => {
        let newUser ={ 
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        }
        setUser(newUser);
    }

    // Lógica para direcionar para a tela de Login
    if (user === null) {
        return (
            <Login onReceiveGoogle={actionLoginDataGoogle}></Login>
        );
    }

    return (
        <StyledHome>
            <div style={{ display: "flex", flexDirection: "column", flex: 1,}}>
                <Header valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} user={user}/>                <VideoCarrossel/>
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
                </TimeLine>
                {/* <Footer></Footer> */}
            </div>
        </StyledHome>

    );
}
export default Home;