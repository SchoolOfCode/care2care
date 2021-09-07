import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  }

body {
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor2};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html {
  overscroll-behavior-y: contain;
  overflow-x: hidden!important;
}

*::-webkit-scrollbar {
  scrollbar-width: none;  
  display: none;
  }
`;
