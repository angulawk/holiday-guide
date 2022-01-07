import React, { Fragment } from "react";

import { useMatch } from "react-router-dom";

import { Header } from "UI/molecules/Header";

import { HolidaysDetails } from "containers/HolidaysDetails";

const HolidaysPage = (): JSX.Element => {
  const holidaysNameMatch = useMatch(
    "/holidays/:alpha3Code"
  );

  return (
    <Fragment>
      <Header />

      {holidaysNameMatch && <HolidaysDetails />}
    </Fragment>
  );
};

export { HolidaysPage };
