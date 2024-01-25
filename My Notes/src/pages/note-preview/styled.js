import styled from "styled-components";




export const Container = styled.div `




 header {

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 40px ;

    border-bottom: 1px #3E3B47 solid;

    #profileHeader {

     display: flex;
     gap: 9px;
     align-items: center;

     img {

        border-radius: 50%;
        width: 70px;
        height: 70px;
        object-fit: cover;
     }

    }

    #power {

background: none;
border: none;

    }



 }


   main {

   width: 555px;
   margin: auto;

   #deleteNote {

    margin-top: 65px;
    display: flex;
    justify-content: end;

   a{

     color:#FF9000 ;
   }

   }

   h1 {

    margin-top: 65px;
    font-size: 36px;
    margin-bottom: 16px;
   }


   h3 {

    color: #999591;
font-family: "Roboto Slab";
font-size: 20px;
font-style: normal;
font-weight: 400;

 padding-bottom: 16px;
 border-bottom: 1px #3E3B47 solid;

 margin-bottom: 16px;



   }


  #links {

   margin-top: 55px;


  }




   #markerTitle {


   margin-top: 30px ;

   display: flex;
   gap: 6px;

   }

     #marker {

      padding: 5px 14px ;
      background: #FF9000;
      color: #232129;
      border-radius: 5px;
      

     }


   


   }

















`