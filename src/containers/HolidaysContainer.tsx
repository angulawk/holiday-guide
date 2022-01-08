import React from "react";

import { useMatch } from "react-router-dom";

import { useCountryList } from "hooks/api/useCountryList";
import { useHolidaysList } from "hooks/api/useHolidaysList";

import { PageContainer } from "UI/atoms/PageContainer";
import { Text } from "UI/atoms/Text";
import { HolidaysDetails } from "UI/molecules/HolidaysDetails";
import { IHolidays } from "api/__typings__/getHolidaysList";

function HolidaysContainer(): JSX.Element {
  const { holidaysList } = useHolidaysList();
  const { countryList } = useCountryList();

  const holidaysMatch = useMatch(
    "/holidays/:alpha2Code"
  );

  const holidays = countryList?.find(
    ({ alpha2Code }) =>
      alpha2Code?.toLowerCase() === holidaysMatch?.params?.alpha2Code
  );

  return (
    <PageContainer>
      <HolidaysDetails
        alt={`${holidays?.name} flag`}
        countryName={holidays?.name || ""}
        src={`https://flagcdn.com/32x24/${holidays?.alpha2Code.toLowerCase()}.png`}
      />

      {holidaysList?.map(({
        name,
        start,
        end
      }: IHolidays) => (
        <Text key={`${start}-${name}-${end}`}>{name}</Text>
      ))}
    </PageContainer>      
  );
}

export { HolidaysContainer };
