import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
import logo from "./images/logo.svg";
import themes from "./theme/theme";
import useLocalStorage from "./__Hooks/useLocalStorage";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle changeTheme={changeTheme} /> 
      <img src={logo} className="App-logo" alt="logo" />
     </ThemeProvider>
  );
};

export default App;
