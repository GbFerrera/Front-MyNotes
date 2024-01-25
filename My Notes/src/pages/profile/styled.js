import styled from "styled-components";



export const Container = styled.div `


#bg {

height: 144px;
width: 100%   ;
background: #232129;

}

section {

display: flex;
align-items: center;
justify-content: center;
position: absolute;

width: 100%;
}

#avatarFile{


margin-top: -100px;
display: grid;
position: relative;

}

 #avatar {

    
    
    width: 186px;
    height: 186px;

    object-fit: cover;

    border-radius: 50%;

    

   
 }


label {

  

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    display: grid;
    place-content: center;

    width: 48px;
    height: 48px;

    margin-top: -60px;
   margin-left: 140px;

    border-radius: 50%;

    img{

        width: 20px;
        height: 20px;
    }

    input {

display: none;
}



}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
   
#inputs {

margin-top: 200px;
display: grid;
gap: 8px;
margin-bottom: 24px ;

width: 340px ;


}

button{

    width: 340px;
    border: none;
    margin-bottom: 200px;
}
 


`