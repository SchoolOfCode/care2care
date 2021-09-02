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

  input {
    :read-only {
      color: ${(props) => props.theme.notActive};
      cursor: not-allowed;
    }
  }

  select {
    color: #333;
    cursor: pointer;
    :required:invalid {
      color: gray;
    }
  }

  option {
    color: #333;
  }

  input,
  select,
  option {
    width: 100%;
    padding: 5px;
    :focus {
      outline: none;
    }
  }
`;
