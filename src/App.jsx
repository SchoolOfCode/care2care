import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
// import logo from "./images/logo.svg";
import themes from "./theme/theme";
import useLocalStorage from "./components/__Hooks/useLocalStorage";
import NavBar from "./components/NavBar.js";
import Main from "./components/Main.js";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle changeTheme={changeTheme} />
      <NavBar />
      <Main />
    </ThemeProvider>
  );
};

export default App;
