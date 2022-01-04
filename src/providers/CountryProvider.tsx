import React, { createContext, useCallback, useState } from "react";

import {
  ICountryProviderProps,
  ICountryContext,
  TAppState,
  TAppStateKeys
} from "providers/__typings__/CountryProvider";

const CountryContext = createContext<ICountryContext>({
  appState: {
    isGettingCountryList: false
  },
  isAppLoading: false,
  updateAppState: () => false
});

function CountryProvider({ children }: ICountryProviderProps): JSX.Element {  
  const [appState, setAppState] = useState<TAppState>({
    isGettingCountryList: false
  });

  const updateAppState = useCallback((key: TAppStateKeys, value: boolean) => {
    setAppState((_appState) => ({
      ..._appState,
      [key]: value
    }));
  }, []);

  const isAppLoading = Object.values(appState).includes(true);

  return (
    <CountryContext.Provider
      value={{
        appState,
        isAppLoading,
        updateAppState
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export { CountryContext };

export { CountryProvider };
