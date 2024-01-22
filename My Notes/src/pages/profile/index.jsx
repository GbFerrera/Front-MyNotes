import { Container } from "./styled";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import cam from "../../assets/cam.svg"

import login from "../../assets/login.svg"

export function Profile(){


return(


<Container>

<div id="bg"></div>

<form>

<section>
<div id="avatarFile" >



   <img id="avatar" src={login} alt="" />

  <label htmlFor="file">
    
   <img src={cam} alt="" />
    <input id="file" type="file" />
    
    </label>
   

   
   
   </div>
</section>
    <div id="inputs">

   <Input title={"Nome atual"}/>
   <Input title={"E-mail atual"}/>
   <Input title={"Senha atual"}/>
   <Input title={"Nova senha"}/>
</div>
   <Button title={"Salvar"}/>
</form>

  
</Container>




)








}