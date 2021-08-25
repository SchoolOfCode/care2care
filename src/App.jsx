import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
// import logo from "./images/logo.svg";
import themes from "./theme/theme";
import useLocalStorage from "./components/__Hooks/useLocalStorage";
import NavBar from "./components/NavBar.js";
import Main from "./components/Main.js";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle changeTheme={changeTheme} />
      <NavBar />
      <Main />
    </ThemeProvider>
  );
};

export default App;
