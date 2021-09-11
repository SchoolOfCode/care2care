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
      color: ${(props) => props.theme.menuBg};
      cursor: not-allowed;

      :focus {
        border-bottom: 2px #9b0303 solid;
      }
    }
  }

  select {
    color: ${(props) => props.theme.menuBg};
    cursor: pointer;
    :required:invalid {
      color: ${(props) => props.theme.menuBg};
    }
  }

  option {
    color: ${(props) => props.theme.menuBg};
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
    background-color: ${(props) => props.theme.navBg};
    color: ${(props) => props.theme.fontColor2};

    :focus {
      outline: none;
      border-bottom: 2px ${(props) => props.theme.accent1} solid;
      color: ${(props) => props.theme.fontColor2};
    }

    ::placeholder {
      color: ${(props) => props.theme.menuBg};
    }
  }

  /* input[type="date"] {
    color: ${(props) => props.theme.menuBg};
  } */

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.navBg} inset;
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.navBg} inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.fontColor2};
  }
`;
