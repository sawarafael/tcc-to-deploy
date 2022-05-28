import {
  Button,
  Container,
  Content,
  Form,
  InputsColumn,
  InputsForm,
  Submit,
  Title,
} from "./styles";

import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/`);
  };

  return (
    <Container>
      <Form>
        <Title>Postagem de Processos</Title>
        <Content>
          <InputsForm>
            <InputsColumn>
              <label id="act-type">Tipo de Ação</label>
              <br />
              <select>
                <option>Defesa</option>
                <option>Conhecimento</option>
                <option>Execução</option>
                <option>Cautelar</option>
              </select>
              <br />

              <label>Cliente</label>
              <br />
              <input type="text" id="client" />
              <br />

              <label>Posição do Cliente</label>
              <br />
              <select>
                <option>Réu</option>
                <option>Autor</option>
              </select>
              <br />

              <label>Adverso</label>
              <br />
              <input type="text" id="adverse" />
              <br />

              <label>Situação</label>
              <br />
              <select>
                <option>Pendente</option>
                <option>Em Execução</option>
                <option>Executado</option>
              </select>
              <br />

              <label>Status</label>
              <br />
              <select>
                <option>Ativo</option>
                <option>Inativo</option>
              </select>
            </InputsColumn>

            <InputsColumn>
              <label>Posição do Adverso</label>

              <br />
              <select>
                <option>Réu</option>
                <option>Autor</option>
              </select>
              <br />

              <label>Número Processo</label>
              <br />
              <input type="text" id="num-process" />
              <br />

              <label>Juíz</label>
              <br />
              <input type="text" id="juiz" />
              <br />

              <label>Data da Abertura</label>
              <br />
              <input type="date" id="data" />
              <br />

              <label>Data Atualização</label>
              <br />
              <input type="date" id="data" />
              <br />
            </InputsColumn>
          </InputsForm>
        </Content>
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
