export interface ICountry {
  alpha3Code: string;
  capital: string;
  name: string;
}

export type TCountryList = Array<ICountry>;