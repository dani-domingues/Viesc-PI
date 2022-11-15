import React from "react";
import config from '../../../../config.json';
import { StyledHead } from "./header-styles";
import { StyledBanner } from "./banner-styles";


function Header() {

  return (

    <StyledHead>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        {/*<img src="banner" />*/}
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.nome}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHead>
  )
}

export default Header;