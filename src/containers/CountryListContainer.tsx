import React from "react";

import { useCountryList } from "hooks/api/useCountryList";
import { LayoutContainer } from "UI/layout/LayoutContainer";

import { Text } from "UI/atoms/Text";

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};

  return (
    <LayoutContainer marginTop="spacing64">
      <Text as="h2" fontSize="font20">Countries list</Text>

      {!isGettingCountryList && (
        countryList?.map(({
          alpha3Code,
          name
        }) => (
          <Text key={`${name}-${alpha3Code}`}>
            {name}
          </Text>
        ))
      )}
    </LayoutContainer>      
  );
}

export { CountryListContainer };
