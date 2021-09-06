import { css } from "styled-components";

export const StyledBGProfile = css`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.accent2} 0%,
    ${(props) => props.theme.accent1} 100%
  );
`;
