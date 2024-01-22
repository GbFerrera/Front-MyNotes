import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import  {SignIn}  from "./pages/sign-In";
import { SignUp } from "./pages/sign-up";
import { Profile } from "./pages/profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

       <GlobalStyle/>
          <Profile />

    </ThemeProvider>
  </React.StrictMode>
);
