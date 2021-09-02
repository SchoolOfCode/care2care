import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;

  @media (max-width: 768px) {
    width: 90vw;
  }

  button {
    margin: 15px 0;
  }

  input,
  select {
    width: 100%;
    padding: 5px;
  }

  input:read-only {
    color: ${(props) => props.theme.notActive};
  }
`;
