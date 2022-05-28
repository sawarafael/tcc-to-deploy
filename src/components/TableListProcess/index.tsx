import Input from "../Input";
import { Container, Search } from "./styles";

export const TableListProcess = () => {
  return (
    <Container>
      <h1>Listagem de Processos</h1>
      <Search>
        <Input
          placeholder="Pesquise"
          name={"PesquisarProcesso"}
          onChange={() => console.log("deu bom")}
          type="text"
        />
        <button>Pesquisar</button>
      </Search>

      <table>
        <tr>
          <th>Número Processo</th>
          <th>Data Abertura</th>
          <th>Cliente</th>
          <th>Posição Cliente</th>
          <th>Adverso</th>
          <th>Situação</th>
        </tr>

        <tr>
          <td>1588512-2022</td>
          <td>01/01/2022</td>
          <td>João</td>
          <td>Réu</td>
          <td>Empresa N</td>
          <td>Em Execução</td>
        </tr>

        <tr>
          <td>1984547-2022</td>
          <td>21/05/2022</td>
          <td>Carlos</td>
          <td>Auto</td>
          <td>Empresa Y</td>
          <td>Executado</td>
        </tr>

        <tr>
          <td>1988517-2022</td>
          <td>11/11/2022</td>
          <td>Autor</td>
          <td>Réu</td>
          <td>Empresa X</td>
          <td>Pendente</td>
        </tr>
      </table>
    </Container>
  );
};
