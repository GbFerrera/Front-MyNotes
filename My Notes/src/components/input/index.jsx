import { Component } from "./styled";



export function Input({title,icon: Icon, ...rest}){


return (


<Component id="Input"  >

  {Icon && <Icon size={20} color={"#666360"}/>}
  <input placeholder={title} {...rest} />

</Component>





)





}