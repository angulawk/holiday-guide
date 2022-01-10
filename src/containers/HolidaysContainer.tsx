import React, { useMemo } from "react";

import { useMatch } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { useCountryList } from "hooks/api/useCountryList";
import { useHolidaysList } from "hooks/api/useHolidaysList";

import { PageContainer } from "UI/atoms/PageContainer";
import { HolidaysDetails } from "UI/molecules/HolidaysDetails";
import { HolidaysCalendar } from "UI/molecules/HolidaysCalendar";

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

  const eventsList = useMemo(
    () =>
      holidaysList?.map(({ 
        end,
        name,
        public: isPublic,
        start
      }) => ({
        end: new Date(end),
        isPublic,
        title: name,
        start: new Date(start)
      })), [holidaysList]
  );

  return (
    <PageContainer>
      <HolidaysDetails
        alt={`${holidays?.name} flag`}
        countryName={holidays?.name || ""}
        src={`https://flagcdn.com/32x24/${holidays?.alpha2Code.toLowerCase()}.png`}
      />

      <HolidaysCalendar
        eventsList={eventsList}
      />
    </PageContainer>      
  );
}

export { HolidaysContainer };
