import React, { useCallback, useContext, useEffect, useState } from "react";

import { getCountryList } from "api/getCountryList";
import { GlobalContext } from "providers/GlobalProvider";

import { IGlobalContext } from "providers/__typings__/GlobalProvider";
import { TCountryList } from "api/__typings__/getCountryList";

function useCountryList() {
  const { updateAppState } = useContext<IGlobalContext>(GlobalContext);

  const [countryList, setCountryList] = useState<TCountryList>([]);
  const [isGettingCountryList, setIsGettingCountryList] = useState<boolean>(false);

  const fetchCountryList = useCallback(async () => {
    try {
      setIsGettingCountryList(true);

      const response = await getCountryList();

      if(response) {
        setCountryList(response);
      }

      setIsGettingCountryList(false);
    } catch (error) {
      console.error(error);

      setIsGettingCountryList(false);
    }
  }, []);

  useEffect(() => {
    fetchCountryList();
  }, [fetchCountryList]);
  
  useEffect(() => {
    updateAppState("isGettingCountryList", isGettingCountryList);
  }, [isGettingCountryList, updateAppState]);

  return {
    countryList,
    isGettingCountryList
  };
}

export { useCountryList };
