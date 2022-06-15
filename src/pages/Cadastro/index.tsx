import {
  Button,
  Container,
  Form,
  Input,
  InputsForm,
  Label,
  LabelTitle,
  Submit,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";

export const Cadastro = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <Container>
      <LabelTitle variant="h4">Postagem de Processos</LabelTitle>
      <Form>
        <InputsForm>
          <Label variant="h6">Tipo de Ação</Label>
          <Input placeholder="Tipo de Ação" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Cliente</Label>
          <Input placeholder="Cliente" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Posição do Cliente</Label>
          <Input
            placeholder="Posiçao do Cliente"
            variant="outlined"
            size="small"
            select
            defaultValue={"Réu"}
          >
            <MenuItem value="Réu">Réu</MenuItem>
            <MenuItem value="Autor">Autor</MenuItem>
          </Input>
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Adverso</Label>
          <Input placeholder="Adverso" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Causa da Ação</Label>
          <Input
            placeholder="Causa"
            variant="outlined"
            size="small"
            multiline
            rows={4}
          />
        </InputsForm>
        <br />
      </Form>
      <Submit>
        <Button id="cancel" onClick={handleNavigate}>
          Cancelar
        </Button>
        <Button id="cad" onClick={handleNavigate}>
          Cadastrar
        </Button>
      </Submit>
    </Container>
  );
};
