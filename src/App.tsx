import React, { Fragment } from "react";

import { Header } from "UI/molecules/Header";
import { CountryListContainer } from "containers/CountryListContainer";

function App() {
  return (
    <Fragment>
      <Header />
      <CountryListContainer />
    </Fragment>
  );
}

export default App;
