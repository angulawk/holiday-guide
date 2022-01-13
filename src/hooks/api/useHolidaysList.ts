import { useCallback, useEffect, useState, useMemo } from "react";

import { useMatch } from "react-router-dom";

import { getHolidaysList } from "api/getHolidaysList";
import { IHolidaysList } from "api/__typings__/getHolidaysList";

function useHolidaysList() {
  const [holidaysList, setHolidaysList] = useState<IHolidaysList["holidays"]>([]);

  const holidaysMatch = useMatch(
    "/holidays/:alpha2Code"
  );

  const alpha2Code = holidaysMatch?.params?.alpha2Code as string;

  const [isGettingHolidaysList, setIsGettingHolidaysList] = useState<boolean>(false);

  const fetchHolidaysList = useCallback(async () => {
    if(!alpha2Code) return;
    
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
  }, [alpha2Code]);

  const publicHolidays = useMemo(() => {
    return holidaysList?.filter(({ public: isPublic }) => isPublic );
  }, [holidaysList]);

  const nonPublicHolidays = useMemo(() => {
    return holidaysList?.filter(({ public: isPublic }) => !isPublic );
  }, [holidaysList]);
 
  useEffect(() => {
    fetchHolidaysList();
  }, [fetchHolidaysList]);
  
  return {
    holidaysList,
    isGettingHolidaysList,
    nonPublicHolidays,
    publicHolidays
  };
}

export { useHolidaysList };
