import {
  Button,
  Container,
  Content,
  Form,
  InputsForm,
  Submit,
  Title,
} from "./styles";

import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
  const navigate = useNavigate();

  const handleNavigte = () => {
    navigate(`/`);
  };

  return (
    <Container>
      <Form>
        <Title>Postagem de Processos</Title>
        <Content>
          <InputsForm>
            <div id="input-left">
              <label id="act-type">Tipo de Ação</label>
              <br />
              <select>
                <option>Defesa</option>
                <option>Conhecimento</option>
                <option>Execução</option>
                <option>Cautelar</option>
              </select>
              <br />
              <br />

              <label>Cliente</label>
              <br />
              <input type="text" id="client" />
              <br />
              <br />

              <label>Posição do Cliente</label>
              <br />
              <select>
                <option>Réu</option>
                <option>Autor</option>
              </select>
              <br />
              <br />

              <label>Adverso</label>
              <br />
              <input type="text" id="adverse" />
              <br />
              <br />

              <label>Situação</label>
              <br />
              <select>
                <option>Pendente</option>
                <option>Em Execução</option>
                <option>Executado</option>
              </select>
              <br />
              <br />

              <label>Status</label>
              <br />
              <select>
                <option>Ativo</option>
                <option>Inativo</option>
              </select>
            </div>

            <div id="input-right">
              <label>Posição do Adverso</label>
              <br />
              <select>
                <option>Réu</option>
                <option>Autor</option>
              </select>
              <br />
              <br />

              <label>Número Processo</label>
              <br />
              <input type="text" id="num-process" />
              <br />
              <br />

              <label>Juíz</label>
              <br />
              <input type="text" id="juiz" />
              <br />
              <br />

              <label>Data da Abertura</label>
              <br />
              <input type="date" id="data" />
              <br />
              <br />

              <label>Data Atualização</label>
              <br />
              <input type="date" id="data" />
              <br />
              <br />
              <br />
            </div>
          </InputsForm>
        </Content>
      </Form>
      <Submit>
        <Button id="cancel" onClick={handleNavigte}>
          Cancelar
        </Button>
        <Button id="cad" onClick={handleNavigte}>
          Cadastrar
        </Button>
      </Submit>
    </Container>
  );
};
