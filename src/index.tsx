import React from "react";

import ReactDOM from "react-dom";
import { GlobalProvider } from "providers/GlobalProvider";

import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  ThemeProvider
} from "styled-components";

import { theme } from "styles/theme";

import { globalStyle } from "styles/globalStyle";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`
  ${globalStyle}
`;

function renderApp(): void {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
      <GlobalStyle />
    </ThemeProvider>,
    document.getElementById("root")
  );
}

renderApp();

// If you want to start measuring performance in your app, pass a function
reportWebVitals();
