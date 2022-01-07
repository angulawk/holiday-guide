import React from "react";

import { useMatch } from "react-router-dom";

import { useCountryList } from "hooks/api/useCountryList";

import { PageContainer } from "UI/atoms/PageContainer";
import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { LayoutContainer } from "UI/layout/LayoutContainer";

function HolidaysDetails(): JSX.Element {
  const { countryList } = useCountryList() || {};

  const holidaysNameMatch = useMatch(
    "/holidays/:alpha3Code"
  );

  const holidays = countryList?.find(
    ({ alpha3Code }) =>
      alpha3Code?.toLowerCase() === holidaysNameMatch?.params?.alpha3Code
  );

  return (
    <PageContainer>
      <LayoutContainer display="flex">
        <Image
          alt={`${holidays?.name} flag`}
          src={`https://flagcdn.com/32x24/${holidays?.alpha2Code.toLowerCase()}.png`}
        />

        <Text
          as="h2"
          fontSize="font20"
          fontWeight="medium"
          paddingLeft="spacing24"
        >
          {holidays?.name}
        </Text>
      </LayoutContainer>
    </PageContainer>      
  );
}

export { HolidaysDetails };
