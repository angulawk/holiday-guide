import React, { useCallback, useContext, useEffect, useState } from "react";

import { useMatch } from "react-router-dom";

import { getHolidaysList } from "api/getHolidaysList";
import { GlobalContext } from "providers/GlobalProvider";

import { IUseHolidaysList } from "hooks/api/__typings__/useHolidaysList";
import { IGlobalContext } from "providers/__typings__/GlobalProvider";
import { IHolidaysList } from "api/__typings__/getHolidaysList";

function useHolidaysList(): IUseHolidaysList {
  const { updateAppState } = useContext<IGlobalContext>(GlobalContext);

  const [holidaysList, setHolidaysList] = useState<IHolidaysList["holidays"]>([]);

  const holidaysMatch = useMatch(
    "/holidays/:alpha2Code"
  );

  const alpha2Code = holidaysMatch?.params?.alpha2Code as string;

  const [isGettingHolidaysList, setIsGettingHolidaysList] = useState<boolean>(false);

  const fetchHolidaysList = useCallback(async () => {
    try {
      setIsGettingHolidaysList(true);

      const response = await getHolidaysList({ alpha2Code });

      if(response) {
        setHolidaysList(response);
      }

      setIsGettingHolidaysList(false);
    } catch (error) {
      console.error(error);

      setIsGettingHolidaysList(false);
    }
  }, []);

  useEffect(() => {
    fetchHolidaysList();
  }, [fetchHolidaysList]);
  
  useEffect(() => {
    updateAppState("isGettingHolidaysList", isGettingHolidaysList);
  }, [isGettingHolidaysList, updateAppState]);

  return {
    holidaysList,
    isGettingHolidaysList
  };
}

export { useHolidaysList };
