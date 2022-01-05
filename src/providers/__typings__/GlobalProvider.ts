import React from "react";

export interface IGlobalProviderProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export type TAppStateKeys =
  | "isGettingCountryList";

export type TAppState = Record<TAppStateKeys, boolean>;

export interface IGlobalContext {
  appState: TAppState;
  isAppLoading: boolean;
  updateAppState: (key: TAppStateKeys, value: boolean) => void;
}
