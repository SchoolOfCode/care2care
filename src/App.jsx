import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
// import logo from "./images/logo.svg";
import themes from "./theme/theme";
import useLocalStorage from "./components/__Hooks/useLocalStorage";
import NavBar from "./components/NavBar.js";
import Main from "./components/Main.js";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";

const Authenticated = (props) => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
};

const NotAuthenticated = (props) => {
  return <LoginButton />;
};

const FirstPage = (props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Authenticated /> : <NotAuthenticated />;
};

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
      <FirstPage />
    </ThemeProvider>
  );
};

export default App;
