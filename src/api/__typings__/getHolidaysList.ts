export interface IHolidays {
  name: string;
  start: string;
  end: string;
  public: boolean;
}

export interface IHolidaysList {
  holidays: IHolidays[];
}

export interface IGetHolidaysListArgs {
  alpha2Code: string;
}
