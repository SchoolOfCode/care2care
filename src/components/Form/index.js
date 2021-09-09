import styled from "styled-components";
import { StyledButton } from "../StyledComponent/StyledButton";
import { ColumnFlexCenter } from "../StyledComponent/StyledDisplay";

const Form = ({ children, formSubmitted, FORM_ACTION, validateForm }) => {
  return (
    <StyledForm>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>

      <form
        action={FORM_ACTION}
        method="post"
        target="hidden_iframe"
        onSubmit={(e) => {
          validateForm();
          if (!validateForm()) {
            e.preventDefault();
          }
        }}
      >
        {children}
        <div className="button"></div>
        <StyledButton type="submit">SUBMIT</StyledButton>
        <div className="submitted-status">{formSubmitted}</div>
      </form>
    </StyledForm>
  );
};

export default Form;

export const StyledForm = styled.div`
  ${ColumnFlexCenter}
  margin: 0 auto;
  width: 500px;

  @media (max-width: 768px) {
    width: 90vw;
  }

  .button {
    text-align: center;
    button {
      margin: 15px 0;
    }
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
