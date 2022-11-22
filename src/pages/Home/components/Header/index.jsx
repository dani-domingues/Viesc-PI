import { Link } from "react-router-dom";
import Search from "./components/Search";
import { StyledHeader } from "./menu-styled";

export default function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <div className="logo">
          <img src="../../../logo.png"/>
        </div>
        <nav>
          <ul>
            <Link to="/login"> Fazer Login </Link>
            <li> Configurações </li>
            <li> Sair </li>
          </ul>
        </nav>
      </div>
      <Search />
    </StyledHeader>
  );
}

