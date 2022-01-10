import { colorPalette } from "styles/variables/colorPalette";
import { fontFamilies } from "styles/variables/fontFamilies";
import { spacing } from "styles/variables/spacing";

export const globalStyle = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: ${fontFamilies.FiraCode};
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  * {
    -webkit-tap-highlight-color: transparent;
    font-smooth: always;
  }

  *, 
  *:after, 
  *:before, 
  *::before, 
  *::after {
    box-sizing: border-box;
    outline: 0;
    scrollbar-color: ${colorPalette.blue400} transparent;
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar {
    width: ${spacing.spacing8};
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colorPalette.blue400};
    border-radius: ${spacing.spacing8};
    border: none;
  }

  body {
    background-color: ${colorPalette.white};
    color: ${colorPalette.black200};
    line-height: 1;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
  }

  ::selection { 
    background: ${colorPalette.blue200}; 
    color: ${colorPalette.black200}; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamilies.FiraCode};
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
  }
`;
