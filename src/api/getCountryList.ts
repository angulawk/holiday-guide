import axios from "axios";
import localforage from "localforage";

import { TCountryList } from "api/__typings__/getCountryList";

export const getCountryList = async (): Promise<TCountryList> => {
  try {    
    const countries = await localforage.getItem<TCountryList>("countries");

    if (countries) {
      return countries;
    }

    const response = await axios.get("http://api.countrylayer.com/v2/all?access_key=2b3ef594ec85c384d402f4d3252f379c");

    const data: TCountryList = response?.data;

    if (data) {
      await localforage.setItem("countries", data);
    }

    return data;
  } catch (error: unknown) {
    const err = error as Error;

    throw new Error(err?.message);
  }
};