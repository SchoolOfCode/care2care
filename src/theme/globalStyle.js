import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor2};
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 14px;
  line-height: 1.5;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  overscroll-behavior-y: contain;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html {
  overflow-x: hidden!important;
}

*::-webkit-scrollbar {
  scrollbar-width: none;  
  display: none;
  }
`;
