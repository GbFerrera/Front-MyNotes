import styled from "styled-components"



export const Container = styled.div `


display: flex;
height: 100vh;

aside {

background-color: #232129;
width: 250px;
height: 100vh;
text-align: center;
display: flex;
flex-direction: column;

justify-content: space-between;

 h1{

  margin-top: 40px ;
  font-size: 24px;
font-style: normal;
font-weight: 700;
color: ${({theme}) => theme.COLORS.ORANGE};


 }

 #filterTags {
 margin-top: 90px;

 display: flex;
 flex-direction: column;
 gap: 45px ;

 }

 button {

width: 100%;
height: 80px;
background: ${({theme}) => theme.COLORS.ORANGE};

display: flex;
align-items: center;
justify-content: center;

gap: 8px;

color: #232129;

 }
}


#notes {

  padding: 20px 64px 64px;

width: 100%;
 header{

margin-bottom: 85px;

width: 100%;

display: flex;
justify-content: space-between;

#profileHeader{

display: flex;
gap: 9px;

img{
  width: 70px;
height: 70px;
object-fit: cover ;
border-radius: 50%;
}

}

#power {
  background: none;
  border: none;
}

  
} 


main {

margin-top: 65px ;


h3 {
  color: #999591;
  margin-bottom: 40px;
}

section {
  display: grid;
  gap: 16px;

}

.Note {

background: #3E3B47;
padding: 16px 22px;
border-radius: 10px;

#tags {
display: flex;
 gap: 6px;

 margin-top: 24px;
}


 #tag {

  background: ${({theme}) => theme.COLORS.ORANGE};
  font-size: 12px;
  color: #232129;
  padding: 5px 14px;
 
 display: flex;
 justify-content: center;
 border-radius: 5px;

 }

}

}





}











`