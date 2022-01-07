import React, { Fragment } from "react";

import { useMatch } from "react-router-dom";

import { Header } from "UI/molecules/Header";

import { HolidaysContainer } from "containers/HolidaysContainer";

const HolidaysPage = (): JSX.Element => {
  const holidaysMatch = useMatch(
    "/holidays/:alpha3Code"
  );

  return (
    <Fragment>
      <Header />

      {holidaysMatch && <HolidaysContainer />}
    </Fragment>
  );
};

export { HolidaysPage };
