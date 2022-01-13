import React, { createContext } from "react";

import { useCountryList } from "hooks/api/useCountryList";
import { useHolidaysList } from "hooks/api/useHolidaysList";

import {
  IGlobalProviderProps,
  IGlobalContext
} from "providers/__typings__/GlobalProvider";

const GlobalContext = createContext<IGlobalContext>({
  countryList: [],
  holidaysList: [],
  isGettingCountryList: false,
  isGettingHolidaysList: false,
  publicHolidays: [],
  nonPublicHolidays: []
});

function GlobalProvider({ children }: IGlobalProviderProps): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};
  
  const {
    holidaysList,
    isGettingHolidaysList,
    publicHolidays,
    nonPublicHolidays
  } = useHolidaysList();

  return (
    <GlobalContext.Provider
      value={{
        countryList,
        holidaysList,
        isGettingCountryList,
        isGettingHolidaysList,
        publicHolidays,
        nonPublicHolidays,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };

export { GlobalProvider };
