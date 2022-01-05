import React from "react";

import { useCountryList } from "hooks/api/useCountryList";
import { LayoutContainer } from "UI/layout/LayoutContainer";

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};

  return (
    <LayoutContainer marginTop="spacing64">
      <h2>Countries list</h2>

      {!isGettingCountryList && (
        countryList?.map(({
          alpha3Code,
          name
        }) => (
          <div key={`${name}-${alpha3Code}`}>
            {name}
          </div>
        ))
      )}
    </LayoutContainer>      
  );
}

export { CountryListContainer };
