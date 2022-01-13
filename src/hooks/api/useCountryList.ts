import { useCallback, useEffect, useState } from "react";

import { getCountryList } from "api/getCountryList";

import { TCountryList } from "api/__typings__/getCountryList";

function useCountryList() {
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

  return {
    countryList,
    isGettingCountryList
  };
}

export { useCountryList };
