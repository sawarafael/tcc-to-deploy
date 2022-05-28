import { SideBar } from "../../components/Sidebar";
import { Graphic } from "../../components/Graphic";
import { TableListProcess } from "../../components/TableListProcess";

import { Container, Information } from "./styles";

const ListagemProcessos = () => {
  return (
    <Container>
      <SideBar />

      <div className="content">
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

        <TableListProcess />
      </div>
    </Container>
  );
};

export default ListagemProcessos;
