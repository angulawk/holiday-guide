export interface ICountry {
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  name: string;
}

export type TCountryList = Array<ICountry>;