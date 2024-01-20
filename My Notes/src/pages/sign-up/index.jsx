import { Container } from "./styled";
import { Button } from "../../components/button";
import {Input} from "../../components/input"

import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import image from "../../assets/login.svg"

export function SignUp() {
  return (
    <Container>

<img src={image} alt="" />

      <div id="itens">
        <header>
          <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        </header>

        <main>
          <h3>Faça seu login</h3>

          <form>
           <Input type="text" icon={FiUser} title={"Nome"} />
            <Input type="email" icon={FiMail} title={"E-mail"} />
            <Input type="password" icon={FiLock} title={"Senha"} />

            <Button type="button" title={"Cadastrar"} />
          </form>
          <a href="#">Voltar para o login</a>
        </main>
      </div>

    </Container>
  );
}
