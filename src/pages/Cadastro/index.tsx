import {
  Button,
  Container,
  Form,
  Input,
  InputsForm,
  Label,
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
      <Label variant="h4">Postagem de Processos</Label>
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
          <Label variant="h6">Descrição da Ação</Label>
          <Input
            placeholder="Descrição"
            variant="outlined"
            size="small"
            multiline
            rows={3}
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
