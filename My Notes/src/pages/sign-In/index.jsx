import { Container } from "./styled";
import { Button } from "../../components/button";
import {Input} from "../../components/input"

import { FiMail, FiLock } from 'react-icons/fi'

import image from "../../assets/login.svg"

export function SignIn() {
  return (
    <Container>
      <div id="itens">

        <header>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
    </header>

    <main>

        <h3>Faça seu login</h3>

        <form>

        <Input type="email" icon={FiMail} title={"E-mail"}/>
        <Input type="password" icon={FiLock} title={"Senha"}/>
    
      <Button type="button" title={"Entrar"}/>
      </form>
     <a href="#">Criar conta</a>
        </main>
      </div>
      
      <img src={image} alt="" />
    </Container>
  );
}
