import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import TimeLine from "./components/TimeLine";
import config from '../../config.json';


function Home() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </TimeLine>
            </div>

        </>

    );
}
export default Home;