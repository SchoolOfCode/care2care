import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
// import logo from "./images/logo.svg";
import themes from "./theme/theme";
import useLocalStorage from "./components/__Hooks/useLocalStorage";
import { useAuth0 } from "@auth0/auth0-react";
import { Authenticated, NotAuthenticated } from "./__Pages/0_login.js";
// import Settings from "./__Pages/5_settings";

const CheckAuthenticated = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Authenticated /> : <NotAuthenticated />;
};

const App = (changeTheme) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {/* <Settings changeTheme={changeTheme} /> */}
      <CheckAuthenticated />
    </ThemeProvider>
  );
};

export default App;
