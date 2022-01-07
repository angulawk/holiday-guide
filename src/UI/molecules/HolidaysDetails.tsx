import React from "react";

import PropTypes from "prop-types";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { LayoutContainer } from "UI/layout/LayoutContainer";

import { IHolidaysDetailsProps } from "UI/molecules/__typings__/HolidaysDetails";

const HolidaysDetails = ({
  alt,
  countryName,
  src
}: IHolidaysDetailsProps): JSX.Element => (
  <LayoutContainer display="flex">
    <Image
      alt={alt}
      src={src}
    />

    <Text
      as="h2"
      fontSize="font20"
      fontWeight="medium"
      paddingLeft="spacing24"
    >
      {countryName}
    </Text>
  </LayoutContainer>
);

HolidaysDetails.propTypes = {
  alt: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export { HolidaysDetails };
