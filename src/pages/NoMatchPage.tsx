import React from "react";

import { Link } from "react-router-dom";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { LayoutContainer } from "UI/layout/LayoutContainer";

function NoMatchPage(): JSX.Element {
  return (
    <LayoutContainer
      alignItems="center"
      display="flex"
      flexFlow="column nowrap"
      justifyContent="center"
      marginTop="spacing40"
    >
      <Link to="/">
        <Image
          alt="Holidays Guide Logo"
          src="/images/svg/Icon-Logo.svg"
        />
      </Link>
      <Text
        fontSize="font20"
        lineHeight="spacing24"
        paddingBottom="spacing28"
        paddingTop="spacing28"
        textAlign="center"
      >
        This site was not found
      </Text>
    </LayoutContainer>
  );
}

export { NoMatchPage };
