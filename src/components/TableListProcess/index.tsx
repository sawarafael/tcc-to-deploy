import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import Input from "../Input";
import { Container, Search, Button } from "./styles";

export const TableListProcess = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      NumeroProcesso: "123456789",
      Data: "10/05/2020",
      Cliente: "Cliente 1",
      PosicaoCliente: "Autor",
      Adverso: "Companhia M",
      Situacao: "Pendente",
    },
    {
      id: 2,
      NumeroProcesso: "123456789",
      Data: "10/05/2020",
      Cliente: "Cliente 2",
      PosicaoCliente: "Réu",
      Adverso: "Companhia M",
      Situacao: "Em Execução",
    },
    {
      id: 3,
      NumeroProcesso: "123456789",
      Data: "10/05/2020",
      Cliente: "Cliente 3",
      PosicaoCliente: "Réu",
      Adverso: "Companhia M",
      Situacao: "Executado",
    },
    {
      id: 4,
      NumeroProcesso: "123456789",
      Data: "10/05/2020",
      Cliente: "Cliente 3",
      PosicaoCliente: "Réu",
      Adverso: "Companhia M",
      Situacao: "Executado",
    },
  ];

  const columns: GridColDef[] = [
    {
      field: "NumeroProcesso",
      headerName: "Número do Processo",
      width: 200,
    },
    {
      field: "Data",
      headerName: "Data Abertura",
      width: 200,
    },
    {
      field: "Cliente",
      headerName: "Cliente",
      width: 200,
    },
    {
      field: "PosicaoCliente",
      headerName: "Posição Cliente",
      width: 200,
    },
    {
      field: "Adverso",
      headerName: "Adverso",
      width: 200,
    },
    {
      field: "Situacao",
      headerName: "Situação",
      width: 200,
    },
  ];

  return (
    <Container>
      <h1>Listagem de Processos</h1>
      <Search>
        <br />
        <Input
          placeholder="Nome do Cliente"
          name={"PesquisarProcesso"}
          onChange={() => console.log("deu bom")}
          type="text"
        />
        <Button variant="contained">Pesquisar</Button>
      </Search>

      <div style={{ height: 365, width: "auto" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Container>
  );
};
