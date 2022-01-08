import { IHolidaysList } from "api/__typings__/getHolidaysList";

export interface IUseHolidaysList {
  holidaysList: IHolidaysList["holidays"];
  isGettingHolidaysList: boolean;
}
