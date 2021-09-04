import styled from "styled-components";
import { DisplayFlex } from "./DisplayFlex";

export const StyledForm = styled.div`
  ${DisplayFlex}
  flex-direction: column;
  margin: 0 auto;
  width: 500px;

  @media (max-width: 768px) {
    width: 90vw;
  }

  button {
    margin: 15px 0;
  }

  .hidden {
    display: none;
  }

  input {
    :read-only {
      color: ${(props) => props.theme.notActive};
      cursor: not-allowed;

      :focus {
        border-bottom: 2px #9b0303 solid;
      }
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
    padding: 10px 15px;
    margin-bottom: 15px;
    border: none;
    border-bottom: 1px ${(props) => props.theme.notActive} solid;
    border-radius: 5px 5px 0 0;
    :focus {
      outline: none;
      border-bottom: 2px ${(props) => props.theme.accent1} solid;
    }
  }
`;
