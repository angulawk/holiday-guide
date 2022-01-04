import React, { Fragment } from "react";

import { useCountryList } from "hooks/api/useCountryList";

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};

  return (
    <Fragment>
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
    </Fragment>      
  );
}

export { CountryListContainer };
