import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  width: 150px;
  border: none;
  border-radius: 10px;
  color: #f5f5f5;
  background-color: ${(props) => props.theme.accent2};
  font-weight: bold;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
