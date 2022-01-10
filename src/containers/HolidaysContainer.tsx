import React, { useCallback, useMemo, useState } from "react";

import { useMatch } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { useCountryList } from "hooks/api/useCountryList";
import { useHolidaysList } from "hooks/api/useHolidaysList";

import { PageContainer } from "UI/atoms/PageContainer";
import { HolidaysDetails } from "UI/molecules/HolidaysDetails";
import { HolidaysCalendar } from "UI/molecules/HolidaysCalendar";
import { Checkbox } from "UI/molecules/Checkbox";
import { LayoutContainer } from "UI/layout/LayoutContainer";

function HolidaysContainer(): JSX.Element {
  const { holidaysList, isGettingHolidaysList, publicHolidays, nonPublicHolidays } = useHolidaysList();
  const { countryList } = useCountryList();

  const [isPublicHolidaysChecked, setIsPublicHolidaysChecked] = useState<boolean>(false);
  const [isNonPublicHolidaysChecked, setIsNonPublicHolidaysChecked] = useState<boolean>(false);

  const handlePublicHolidaysChange = useCallback((checked) => {
    setIsPublicHolidaysChecked(checked);
  }, []);

  const handleNonPublicHolidaysChange = useCallback((checked) => {
    setIsNonPublicHolidaysChecked(checked);
  }, []);

  const holidaysMatch = useMatch(
    "/holidays/:alpha2Code"
  );

  const holidays = countryList?.find(
    ({ alpha2Code }) =>
      alpha2Code?.toLowerCase() === holidaysMatch?.params?.alpha2Code
  );

  const eventsList = useMemo(() => {
    let _holidays;

    if(isPublicHolidaysChecked && !isNonPublicHolidaysChecked) {
      _holidays = publicHolidays;
    } else if(!isPublicHolidaysChecked && isNonPublicHolidaysChecked) {
      _holidays = nonPublicHolidays;
    } else {
      _holidays = holidaysList;
    }

    return _holidays.map(({ 
      end,
      name,
      public: isPublic,
      start
    }) => ({
      end: new Date(end),
      isPublic,
      title: name,
      start: new Date(start)
    }));
  }, [holidaysList, isNonPublicHolidaysChecked, isPublicHolidaysChecked, nonPublicHolidays, publicHolidays]);

  return (
    <PageContainer>
      <HolidaysDetails
        alt={`${holidays?.name} flag`}
        countryName={holidays?.name || ""}
        src={`https://flagcdn.com/32x24/${holidays?.alpha2Code.toLowerCase()}.png`}
      />

      <LayoutContainer display="flex" marginTop="spacing36">
        <Checkbox
          checked={isPublicHolidaysChecked}
          disabled={isGettingHolidaysList}
          id="public-holidays"
          label="Public holidays"
          onChange={handlePublicHolidaysChange}
        />

        <Checkbox
          checked={isNonPublicHolidaysChecked}
          disabled={isGettingHolidaysList}
          id="non-public-holidays"
          label="Non public holidays"
          onChange={handleNonPublicHolidaysChange}
        />
      </LayoutContainer>

      <HolidaysCalendar
        eventsList={eventsList}
      />
    </PageContainer>      
  );
}

export { HolidaysContainer };
