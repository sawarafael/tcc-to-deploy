import { Box, Button, ButtonBox, Column, Container, Label } from "./styles";

export const Detalhar = () => {
  return (
    <>
      <Label variant="h4" boxSizing={"border-box"}>
        <strong>Processo: </strong>
        Nº 123456789
      </Label>
      <Container>
        <Column>
          <Box>
            <Label variant="h5">Informações Gerais</Label>
          </Box>
          <Box>
            <Label variant="h5">Informações Adicionais</Label>
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
