import { Container } from "./styled";
import { Button } from "../../components/button";
import {Input} from "../../components/input"

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

        <Input title={"E-mail"}/>
        <Input title={"Senha"}/>
    
     <Button title={"Entrar"}/>

     <a href="#">Criar conta</a>
        </main>
      </div>
      
      <img src={image} alt="" />
    </Container>
  );
}
