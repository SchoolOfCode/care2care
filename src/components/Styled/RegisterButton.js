import styled from "styled-components";

export const RegisterButton = styled.button`
  height: 40px;
  width: 150px;
  border: none;
  border-radius: 10px;
  color: #f5f5f5;
  background-color: #51ADE2;
  hover: #FF0000;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 2px 3px #aaaaaa;
  text-transform: uppercase;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #49C6E5;
  }
`;
