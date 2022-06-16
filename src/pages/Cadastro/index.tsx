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
          <Label variant="h6">Data de Abertura</Label>
          <Input type='date' placeholder="" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Adverso</Label>
          <Input placeholder="Adverso" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Instância</Label>
          <Input placeholder="Instância" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Juiz Responsável</Label>
          <Input placeholder="Juiz Responsável" variant="outlined" size="small" />
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
      
      <LabelTitle variant="h4">Detalhes do Cliente</LabelTitle>
      
      <Form>
        <InputsForm>
          <Label variant="h6">Nome do Cliente</Label>
          <Input placeholder="Nome" variant="outlined" size="small" />
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
          <Label variant="h6">Idade</Label>
          <Input placeholder="Idade" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">CPF</Label>
          <Input placeholder="CPF" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">RG</Label>
          <Input placeholder="RG" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Estado Civil</Label>
          <Input placeholder="Estado Civil" variant="outlined" size="small" />
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Gênero</Label>
          <Input
            placeholder="Gênero"
            variant="outlined"
            size="small"
            select
            defaultValue={""}
          >
          <MenuItem value="Réu">Homem Cis</MenuItem>
          <MenuItem value="Autor">Mulher Cis</MenuItem>
          <MenuItem value="Réu">Transgênero</MenuItem>
          <MenuItem value="Autor">Não Binário</MenuItem>
          </Input>
        </InputsForm>
        <br />
        <InputsForm>
          <Label variant="h6">Valor da Causa</Label>
          <Input placeholder="R$" variant="outlined" size="small" />
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
