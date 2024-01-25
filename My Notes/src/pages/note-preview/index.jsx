import { Container } from "./styled";

import login from "../../assets/login.svg"
import power from "../../assets/power.svg"

import { Button } from "../../components/button";


export function NotePreview() {


return (


 
<Container>

<header>
          <div id="profileHeader">
            <img src={login} alt="" />
            <div id="textHeader">
              <p>Bem vindo,</p>

              <h2>Gabriel Ferreira</h2>
            </div>
          </div>
          <button id="power">
            <img src={power} alt="" />
          </button>
        </header>


  <main>

   <div id="deleteNote">
    <a href="#">Excluir a nota</a>
</div>
   <h1>Introdução</h1>

   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusantium expedita, repudiandae, 
    reprehenderit officia dolorum, numquam sed aliquam pariatur a ullam. Molestias 
    repellendus cum ratione earum optio impedit minus accusantium!
    </p>

    <section>

       <div id="links">

         <h3>Links úteis</h3>

         <p>https://www.rocketseat.com.br/</p>
         <p>https://www.rocketseat.com.br/</p>


       </div>

       <div id="markers">

<div id="markerTitle">
       <h3>Marcadores</h3>
       </div>
 

       <div id="marker">

        <p>express</p>
       </div>

       <div id="marker">

        <p>node</p>
</div>

       </div>



      




    </section>


    <Button title={"Voltar"}/>


  </main>


</Container>


)





}