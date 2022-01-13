import React, { useContext, useMemo } from "react";

import { useMatch, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { PageContainer } from "UI/atoms/PageContainer";
import { HolidaysCalendar } from "UI/molecules/HolidaysCalendar";
import { HolidaysHeader } from "UI/organisms/HolidaysHeader";
import { GlobalContext } from "providers/GlobalProvider";
import { IGlobalContext } from "providers/__typings__/GlobalProvider";

const defaultValues = {
  NonPublicHolidays: false,
  PublicHolidays: false
};

function HolidaysContainer(): JSX.Element {
  const {
    countryList,
    holidaysList,
    isGettingCountryList,
    isGettingHolidaysList,
    publicHolidays,
    nonPublicHolidays
  } = useContext<IGlobalContext>(GlobalContext);

  const navigate = useNavigate();

  const { control, watch } = useForm({ defaultValues });
  const isPublicHolidaysChecked = watch()?.PublicHolidays;
  const isNonPublicHolidaysChecked = watch()?.NonPublicHolidays;

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
      <HolidaysHeader
        alt={`${holidays?.name} flag`}
        control={control}
        countryName={holidays?.name || ""}
        imageSrc={!isGettingCountryList ? `https://flagcdn.com/32x24/${holidays?.alpha2Code.toLowerCase()}.png` : ""}
        isCheckboxLoading={isGettingHolidaysList}
        isLoading={isGettingCountryList}
        onClick={() => navigate("/")}
      />

      <HolidaysCalendar
        eventsList={eventsList}
        isLoading={isGettingHolidaysList}
      />
    </PageContainer>      
  );
}

export { HolidaysContainer };
