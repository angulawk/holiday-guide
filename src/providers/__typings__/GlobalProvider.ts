import React from "react";

import { TCountryList } from "api/__typings__/getCountryList";
import { IHolidays } from "api/__typings__/getHolidaysList";

export interface IGlobalProviderProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export interface IGlobalContext {
  countryList: TCountryList;
  holidaysList: IHolidays[];
  isGettingCountryList: boolean;
  isGettingHolidaysList: boolean;
  publicHolidays: IHolidays[];
  nonPublicHolidays: IHolidays[];
}
