import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { Button, Container, Search } from "./styles";

export const TableListProcess = () => {
  const navigate = useNavigate();

  const rows = [
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

  const columns = [
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  style={{ cursor: "pointer" }}
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => navigate(`/detalhar/:${row.id}`)}
                >
                  <TableCell>{row.NumeroProcesso}</TableCell>
                  <TableCell>{row.Data}</TableCell>
                  <TableCell>{row.Cliente}</TableCell>
                  <TableCell>{row.PosicaoCliente}</TableCell>
                  <TableCell>{row.Adverso}</TableCell>
                  <TableCell>{row.Situacao}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
