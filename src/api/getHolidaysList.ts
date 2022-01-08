import axios from "axios";
import localforage from "localforage";

import { IGetHolidaysListArgs, IHolidaysList } from "api/__typings__/getHolidaysList";

export const getHolidaysList = async ({
  alpha2Code
}: IGetHolidaysListArgs): Promise<IHolidaysList["holidays"]> => {
  try {    
    const holidays = await localforage.getItem<IHolidaysList["holidays"]>(`holidays-${alpha2Code}`);

    if (holidays) {
      return holidays;
    }

    const response = await axios.get("https://api.getfestivo.com/v2/holidays", {
      params: {
        api_key: "43057233060819fe1e553475aabbccff",
        country: alpha2Code,
        year: 2021
      }
    });

    const data: IHolidaysList["holidays"] = response?.data?.holidays;

    if (data) {
      await localforage.setItem(`holidays-${alpha2Code}`, data);
    }

    return data;
  } catch (error: unknown) {
    const err = error as Error;

    throw new Error(err?.message);
  }
};