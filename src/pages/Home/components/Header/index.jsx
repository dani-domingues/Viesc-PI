import { Link } from "react-router-dom";
import Search from "./components/Search";
import { StyledHeader } from "./menu-styled";

export default function Header(props) {
  return (
    <StyledHeader>
      <div className="container">
        <div className="logo">
          <img src="../../../logobranco.png"/>
          <img className="nome" src="../../../viesc-nome.png"/>
        </div>

        <nav>
          
        <Search></Search>
          <ul>
            <li><Link to="/login"> FAZER LOGIN </Link></li>
            <li><Link to="/cadastro"> CADASTRE-SE</Link></li>
          </ul>

          <div className="avatar">
          <img src={props.user.avatar}   />
          <label>{props.user.name}</label>
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
}

