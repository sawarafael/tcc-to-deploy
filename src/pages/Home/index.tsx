import BadgeIcon from "@mui/icons-material/Badge";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { LinksPages, StyledDiv } from "./styles";

const Home = () => {
  return (
    <StyledDiv>
      <LinksPages to="/processos">
        <a>
          <BadgeIcon fontSize="large" /> Processos
        </a>
      </LinksPages>

      <LinksPages to="/cadastro">
        <a>
          <PostAddIcon fontSize="large" /> Cadastrar
        </a>
      </LinksPages>
    </StyledDiv>
  );
};

export default Home;
