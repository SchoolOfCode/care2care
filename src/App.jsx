import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";
import themes from "./theme/theme";
import useLocalStorage from "./components/__Hooks/useLocalStorage";
import { useAuth0 } from "@auth0/auth0-react";
import { Authenticated, NotAuthenticated } from "./components/0_Authenticated";
import Loading from "./components/StyledComponent/Loading";

export const UserContext = createContext();

const App = () => {
  const { isAuthenticated } = useAuth0();
  const [patient, setPatient] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const { isLoading } = useAuth0();
  if (isLoading) return <Loading/>;

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <UserContext.Provider value={{ patient, setPatient, changeTheme }}>
      {isAuthenticated ? <Authenticated /> : <NotAuthenticated />}
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
