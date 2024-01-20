import styled from "styled-components";



export const Container = styled.div `

display: flex;
  justify-content: space-between;
  height: 100vh;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    text-align: center;

    h1 {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-weight: 700;
    }

    p {
      font-size: 14px;
      font-style: normal;
    }
  }

  #itens {
    width: 100%;
    padding: 110px 160px 0;
    
  }

  main {
    margin: auto;
    text-align: center;
    display: grid;
    margin-top: 48px;
    max-width: 340px;
    h3 {
      margin-bottom: 48px;
      font-size: 24px;

      font-weight: 700;
    }
    form {
      display: grid;
      gap: 8px;

    }
    button {
      margin: 24px 0 125px;
    }

  }

  img {
  }

  a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 768px) {
    margin: auto;
    padding: 0;

    text-align: center;

    h1 {
      font-size: 25px;
      font-weight: bold;
    }

    #itens {
      min-width: 375px;
    }

    img {
      display: none;
    }
  }






`