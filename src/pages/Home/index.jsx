import React, { useState } from "react";
import UserInfo from "./components/UserInfo";
import Menu from "./components/Menu";
import TimeLine from "./components/TimeLine";
import config from '../../config.json';
import Login from "../Login";
import Footer from './components/Footer'



function Home() {

    // Tela de Login
                //   Essa sera retirada, esta aqui apenas para testes
     const [ user, setUser] = useState({ 
         id: 1,
         name: 'Daniela Domingues',
         photo: 'https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-icone-azul-do-perfil-de-usuario.png'
     });
    // const [ user, setUser] = useState(null);

    // Filtro do Search
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    // Lógica para direcionar prar a tela de Login
    if(user === null){
        return (
            <Login></Login>
        );
    }

    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <UserInfo />
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </TimeLine>
                <Footer></Footer>
            </div>

        </>

    );
}
export default Home;