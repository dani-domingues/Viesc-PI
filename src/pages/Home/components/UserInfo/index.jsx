import React from "react";
import config from '../../../../config.json';
import { StyledUserInfo } from "./userInfo-styles";
import { StyledBanner } from "./banner-styles";


function UserInfo() {

  return (

    <StyledUserInfo>
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
    </StyledUserInfo>
  )
}

export default UserInfo;