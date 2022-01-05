import React, { createContext, useCallback, useState } from "react";

import {
  IGlobalProviderProps,
  IGlobalContext,
  TAppState,
  TAppStateKeys
} from "providers/__typings__/GlobalProvider";

const GlobalContext = createContext<IGlobalContext>({
  appState: {
    isGettingCountryList: false
  },
  isAppLoading: false,
  updateAppState: () => false
});

function GlobalProvider({ children }: IGlobalProviderProps): JSX.Element {  
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
    <GlobalContext.Provider
      value={{
        appState,
        isAppLoading,
        updateAppState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };

export { GlobalProvider };
