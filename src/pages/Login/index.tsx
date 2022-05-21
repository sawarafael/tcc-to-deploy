import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface Values {
  email: string;
  password: string;
}

export function Login() {
  const [valueInputs, setValueInputs] = useState<Values>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setValueInputs({ ...valueInputs, [name]: value });
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailValidate = regex.test(valueInputs.email);

    if (emailValidate && valueInputs.password.length >= 4) {
      console.log(`${valueInputs.email}, ${valueInputs.password}`);
    } else {
      alert("Email ou senha incorretos");
    }
  }

  return (
    <Container>
      <form className="form" onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="inputs-container">
          <div>
            <label>E-mail:</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>

          <div>
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            {/*<i className="fa fa-eye" aria-hidden="true"></i> */}
          </div>

          <Link to="#">
            <strong>Esqueceu sua senha?</strong>
          </Link>

          <button type="submit">ENTRAR</button>
        </div>

        <p>Novo por aqui?</p>
        <strong>CADASTRE-SE</strong>
      </form>
    </Container>
  );
}
