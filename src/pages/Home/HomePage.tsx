import React, { Fragment } from "react";

import { Header } from "UI/molecules/Header";

import { CountryListContainer } from "containers/CountryListContainer";

const HomePage = (): JSX.Element => (
  <Fragment>
    <Header />

    <CountryListContainer />
  </Fragment>
);

export { HomePage };
