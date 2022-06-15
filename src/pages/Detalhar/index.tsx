import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  ArkBox,
  Box,
  Button,
  ButtonBox,
  Column,
  Container,
  Label,
  LabelTitle,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const Detalhar = () => {
  const navigate = useNavigate();

  return (
    <>
      <ArkBox>
        <LabelTitle variant="h4" boxSizing={"border-box"}>
          <strong>Processo: </strong>
          Nº 123456789
        </LabelTitle>
        <ButtonBox>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate("/")}
          >
            Retornar
          </Button>
        </ButtonBox>
      </ArkBox>
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
                    <Label variant="h6">Juiz Responsável</Label>
                    <Label variant="subtitle1">Fulano do Ciclano</Label>
                  </TableRow>
                  <br />
                  <TableRow>
                    {" "}
                    <Label variant="h6">Instância</Label>
                    <Label variant="subtitle1">7ª Vara Cível</Label>
                  </TableRow>
                  <br />
                  <TableRow>
                    {" "}
                    <Label variant="h6">Tipo da Causa</Label>
                    <Label variant="subtitle1">Ação Cível</Label>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Column>
        <Column>
          <Box>
            <Label variant="h5">Detalhes do Cliente</Label>
            <TableBody>
              <TableRow
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/mulher-irritada-s%C3%A9ria-nova-no-retrato-da-camisa-menina-emocional-isolada-fundo-branco-116930422.jpg"
                  alt="img"
                  style={{ width: "150px" }}
                />
                <Label variant="h6" style={{ marginRight: "50px" }}>
                  Cliente M de L H
                </Label>
              </TableRow>
              <Label
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "45px",
                }}
                variant="body1"
              >
                Autor
              </Label>
              <Label
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "45px",
                }}
                variant="body1"
              >
                37 Anos
              </Label>
              <Label
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "45px",
                }}
                variant="body1"
              >
                123.456.789-00 <strong> CPF: </strong>
              </Label>
              <Label
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "45px",
                }}
                variant="body1"
              >
                1234567 <strong> RG: </strong>
              </Label>
              <Label
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "45px",
                }}
                variant="body1"
              >
                Solteira | Mulher - Feminino
              </Label>
            </TableBody>
          </Box>
          <Box>
            <Label variant="h5">Informações da Causa</Label>
            <hr />
            <div>
              <Label variant="body1" style={{ marginTop: "10px" }}>
                A Autora acabou encontrando problemas em resolver o problema de
                forma pacifica após o Réu ter a acertado com agressões verbais.
                A autora está em dívida com o Réu, e ainda não consegue pagar a
                divida.
              </Label>
            </div>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Label variant="h5">Valor da Causa</Label>
            <Label variant="h6">R$ 15.000,00</Label>
          </Box>
          <Box>
            <Label variant="h5">Última atualização</Label>
            <Label variant="h6">
              {" "}
              <strong>Data: </strong>
              05/20/2022
            </Label>
            <Label variant="h6">
              {" "}
              <strong>Hora: </strong>
              12:00
              <Label>
                Juíz responsável decretou setença imediata da ação. Assim a
                Autora precisa se dirigir ao Fórum mais próximo para receber sua
                Indenização.
              </Label>
            </Label>
          </Box>
        </Column>
      </Container>
    </>
  );
};
