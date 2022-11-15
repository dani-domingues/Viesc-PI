import React from "react";
import { StyledSearch } from "./search-styled";

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
    // const [valorDaBusca, setValorDaBusca] = React.useState("Teste");
    // console.log("Search", valorDaBusca)
    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;

    return (

        <StyledSearch>
            <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
            <button>
                🔎
            </button>
        </StyledSearch>

    )
}