interface IHolidays {
  end: Date;
  isPublic: boolean;
  title: string;
  start: Date;
}

export interface IHolidaysCalendarProps {
  eventsList: IHolidays[];
  isLoading: boolean;
}