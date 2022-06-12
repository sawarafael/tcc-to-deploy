import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  Box,
  Button,
  ButtonBox,
  Column,
  Container,
  Label,
  LabelTitle,
} from "./styles";

export const Detalhar = () => {
  return (
    <>
      <LabelTitle variant="h4" boxSizing={"border-box"}>
        <strong>Processo: </strong>
        Nº 123456789
      </LabelTitle>
      <Container>
        <Column>
          <Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <Label variant="h5">Informações Principais</Label>
                  <br />
                </TableHead>
                <TableBody>
                  <TableRow>
                    {" "}
                    <Label variant="h6">Data de Abertura</Label>
                    <Label variant="subtitle1">05/20/2022</Label>
                  </TableRow>
                  <br />
                  <TableRow>
                    {" "}
                    <Label variant="h6">Situação</Label>
                    <Label variant="subtitle1">Em Execução</Label>
                  </TableRow>
                  <br />
                  <TableRow>
                    {" "}
                    <Label variant="h6">Status</Label>
                    <Label variant="subtitle1">Ativo</Label>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <Label variant="h5">Informações Adicionais</Label>
                  <br />
                </TableHead>
                <TableBody>
                  <TableRow>
                    {" "}
                    <Label variant="h6">Tipo de Ação</Label>
                    <Label variant="subtitle1">05/20/2022</Label>
                  </TableRow>
                  <br />
                  <TableRow>
                    {" "}
                    <Label variant="h6">Situação</Label>
                    <Label variant="subtitle1">Em Execução</Label>
                  </TableRow>
                  <br />
                  <TableRow>
                    {" "}
                    <Label variant="h6">Status</Label>
                    <Label variant="subtitle1">Ativo</Label>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Column>
        <Column>
          <Box>
            <Label variant="h5">Detalhes do Cliente</Label>
          </Box>
          <Box>
            <Label variant="h5">Informações da Causa</Label>
          </Box>
          <Box>
            <Label variant="h5">Valor da Causa</Label>
          </Box>
          <Box>
            <Label variant="h5">Última atualização</Label>
          </Box>
        </Column>
      </Container>
      <ButtonBox>
        <Button variant="contained">Retornar</Button>
        <Button variant="contained">Editar</Button>
      </ButtonBox>
    </>
  );
};
