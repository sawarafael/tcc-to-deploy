import { SideBarButton } from "../SideBarButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Logo from "../../assets/image.png";

import { Container } from "./styles";

export const SideBar = () => {
  return (
    <Container>
      <ArrowForwardIosIcon />
      <header>
        <p></p>
        <img src={Logo} alt="logo" />

        <div className="information">
          <span>Nome usuario</span>
          <p>Cargo</p>
        </div>
      </header>

      <SideBarButton>Pocessos</SideBarButton>
      <SideBarButton>Configurações</SideBarButton>
    </Container>
  );
};
