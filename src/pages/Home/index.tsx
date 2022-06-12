import BadgeIcon from "@mui/icons-material/Badge";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Graphic } from "../../components/Graphic";

import { Information, Links, LinksPages, StyledDiv } from "./styles";

const Home = () => {
  return (
    <StyledDiv>
      <Information>
        <div>
          <h1>Processos Judiciais</h1>

          <p>Você possui um total de 366 Processos Ativos atualmente</p>
          <i>Última Atualização: 28/04/2022</i>
        </div>

        <div>
          <Graphic />
        </div>
      </Information>

      <Links>
        <LinksPages to="/processos">
          <a>
            <BadgeIcon fontSize="large" sx={{ color: "#fff" }} /> Processos
          </a>
        </LinksPages>

        <LinksPages to="/cadastro">
          <a>
            <PostAddIcon fontSize="large" sx={{ color: "#fff" }} /> Cadastrar
          </a>
        </LinksPages>
      </Links>
    </StyledDiv>
  );
};

export default Home;
