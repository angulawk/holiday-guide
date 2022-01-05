import React from "react";

import ReactDOM from "react-dom";
import { GlobalProvider } from "providers/GlobalProvider";

import { ThemeProvider } from "styled-components";

import { theme } from "styles/theme";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

function renderApp(): void {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ThemeProvider>,
    document.getElementById("root")
  );
}

renderApp();

// If you want to start measuring performance in your app, pass a function
reportWebVitals();
