import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex start;
  margin: 0 auto;
  width: 500px;

  @media (max-width: 768px) {
    width: 90vw;
  }

  input,
  select {
    width: 100%;
  }
`;
