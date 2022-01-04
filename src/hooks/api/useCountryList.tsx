import React, { useCallback, useContext, useEffect, useState } from "react";

import { getCountryList } from "api/getCountryList";
import { CountryContext } from "providers/CountryProvider";

import { IUseCountryList } from "hooks/api/__typings__/useCountryList";
import { ICountryContext } from "providers/__typings__/CountryProvider";

function useCountryList(): IUseCountryList {
  const { updateAppState } = useContext<ICountryContext>(CountryContext);

  const [countryList, setCountryList] = useState([]);
  const [isGettingCountryList, setIsGettingCountryList] = useState<boolean>(false);

  const fetchCountryList = useCallback(async () => {
    setIsGettingCountryList(true);
    try {
      const response = await getCountryList();

      setCountryList(response);
    } catch (error) {
      console.error(error);
    }
    setIsGettingCountryList(false);
  }, []);

  useEffect(() => {
    fetchCountryList();
  }, []);
  
  useEffect(() => {
    updateAppState("isGettingCountryList", isGettingCountryList);
  }, [isGettingCountryList, updateAppState]);

  return {
    countryList,
    isGettingCountryList
  };
}

export { useCountryList };
