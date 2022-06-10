import { Box, Button, ButtonBox, Column, Container, Label } from "./styles";

export const Detalhar = () => {
  return (
    <Container>
      <Box>
        <Column>
          <Label variant="h6">Nº - Processo</Label>
          <Label variant="h6">Data de Abertura</Label>
          <Label variant="h6">Tipo de Ação</Label>
          <Label variant="h6">Cliente</Label>
          <Label variant="h6">Posição do Cliente</Label>
          <Label variant="h6">Adverso</Label>
          <Label variant="h6">Posição do Adverso</Label>
          <Label variant="h6">Instância/Vara</Label>
          <Label variant="h6">Situação</Label>
          <Label variant="h6">Status</Label>
        </Column>
        <Column>
          <Label variant="h6">1988547-2022</Label>
          <Label variant="h6">10/05/2020</Label>
          <Label variant="h6">Defesa</Label>
          <Label variant="h6">Cliente 1</Label>
          <Label variant="h6">Autor</Label>
          <Label variant="h6">Companhia M</Label>
          <Label variant="h6">Autor</Label>
          <Label variant="h6">3ª Vara Cível</Label>
          <Label variant="h6">Pendente</Label>
          <Label variant="h6">Aberto</Label>
        </Column>
      </Box>
      <ButtonBox>
        <Button variant="contained">Retornar</Button>
        <Button variant="contained">Editar</Button>
      </ButtonBox>
    </Container>
  );
};
