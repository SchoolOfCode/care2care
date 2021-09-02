import styled from "styled-components";

const Toggle = ({ isOn, handleToggle }) => {
  return (
    <StyledToggle id="toggle">
      <input
        checked={isOn}
        onChange={handleToggle}
        id={"switch"}
        type="checkbox"
      />
      <label htmlFor={"switch"}>
        <span />
      </label>
    </StyledToggle>
  );
};

export default Toggle;

const StyledToggle = styled.div`
  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: -20px;
    width: 40px;
    height: 23px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  label span {
    content: "";
    position: absolute;
    top: 4px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 45px;
    transition: 0.2s;
    background: #333;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  input:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    background: #fff;
  }

  label:active span {
    width: 10px;
  }
`;
