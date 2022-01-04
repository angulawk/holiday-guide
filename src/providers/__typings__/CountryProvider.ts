import React, { Dispatch, SetStateAction } from "react";

export interface ICountryProviderProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}
export interface ICountryList {
  alpha3Code: string;
  capital: string;
  name: string;
}

export type TAppStateKeys =
  | "isGettingCountryList";

export type TAppState = Record<TAppStateKeys, boolean>;

export interface ICountryContext {
  appState: TAppState;
  isAppLoading: boolean;
  updateAppState: (key: TAppStateKeys, value: boolean) => void;
}
