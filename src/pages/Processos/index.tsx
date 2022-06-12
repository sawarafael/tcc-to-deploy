import { TableListProcess } from "../../components/TableListProcess";

import { Container } from "./styles";

const ListagemProcessos = () => {
  return (
    <Container>
      <div className="content">
        <TableListProcess />
      </div>
    </Container>
  );
};

export default ListagemProcessos;
