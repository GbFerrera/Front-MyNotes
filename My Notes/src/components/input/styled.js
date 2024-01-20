import styled from "styled-components";


export const Component = styled.div `


width: 100%;
border-radius: 10px;
padding: 17px 16px ;

display: flex;
gap: 16px;

background: ${({theme}) => theme.COLORS.INPUT} ;

color: white;



input{
  background: none;
  border: none;

  color: white;
  
}






`