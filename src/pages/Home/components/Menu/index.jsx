import Search from "./components/Search";
import { StyledMenu } from "./menu-styled";

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search />
    </StyledMenu>
  );
}

function Logo() {
  return (
    <div className="logo">
  <img width={200
      } 
    src="https://i.ibb.co/8Y93Qqf/VIESC-7-removebg-preview.png"/>
</div>
  )
}