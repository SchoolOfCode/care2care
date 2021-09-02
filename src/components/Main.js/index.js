// That is the component that changes when the uses switches between pages

import { lazy, Suspense } from "react";
import styled from "styled-components";
const Content = lazy(() => import("../__Router"));

const Main = () => {
  return (
    <StyledMain>
      <Suspense fallback={<div>Loading</div>}>
        <Content />
      </Suspense>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  margin-top: 20px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`;
