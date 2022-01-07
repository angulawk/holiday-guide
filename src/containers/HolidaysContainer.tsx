import React from "react";

import { useMatch } from "react-router-dom";

import { useCountryList } from "hooks/api/useCountryList";

import { PageContainer } from "UI/atoms/PageContainer";
import { HolidaysDetails } from "UI/molecules/HolidaysDetails";

function HolidaysContainer(): JSX.Element {
  const { countryList } = useCountryList() || {};

  const holidaysMatch = useMatch(
    "/holidays/:alpha3Code"
  );

  const holidays = countryList?.find(
    ({ alpha3Code }) =>
      alpha3Code?.toLowerCase() === holidaysMatch?.params?.alpha3Code
  );

  return (
    <PageContainer>
      <HolidaysDetails
        alt={`${holidays?.name} flag`}
        countryName={holidays?.name || ""}
        src={`https://flagcdn.com/32x24/${holidays?.alpha2Code.toLowerCase()}.png`}
      />
    </PageContainer>      
  );
}

export { HolidaysContainer };
