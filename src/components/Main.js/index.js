// That is the component that changes when the uses switches between pages

import { createContext, lazy, Suspense, useState } from "react";
import styled from "styled-components";
const Content = lazy(() => import("../__Router"));

export const UserContext = createContext();

const Main = ({ children }) => {
  const [patient, setPatient] = useState("");

  return (
    <StyledMain>
      <UserContext.Provider value={{ patient, setPatient }}>
        <Suspense fallback={<div>Loading</div>}>
          <Content>{children}</Content>
        </Suspense>
      </UserContext.Provider>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  height: 90vh;
  width: 100vw;
  position: relative;
  top: 150px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`;
