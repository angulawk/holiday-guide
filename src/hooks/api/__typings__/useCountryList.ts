import { ICountryList } from "providers/__typings__/CountryProvider";

export interface IUseCountryList {
  countryList: ICountryList[];
  isGettingCountryList: boolean;
}
