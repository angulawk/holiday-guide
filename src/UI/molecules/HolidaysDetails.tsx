import React, { Fragment } from "react";

import PropTypes from "prop-types";

import ContentLoader from "react-content-loader";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { LayoutContainer } from "UI/layout/LayoutContainer";

import { IHolidaysDetailsProps } from "UI/molecules/__typings__/HolidaysDetails";
import { colorPalette } from "styles/variables/colorPalette";

const HolidaysDetails = ({
  alt,
  countryName,
  isLoading = true,
  src
}: IHolidaysDetailsProps): JSX.Element => (
  <Fragment>
    {renderHolidaysDetailsContent({
      alt,
      countryName,
      isLoading,
      src
    })}
  </Fragment>
);

function renderHolidaysDetailsContent({
  alt,
  countryName,
  isLoading,
  src
}: IHolidaysDetailsProps) {
  if (isLoading) {
    return (
      <LayoutContainer display="flex">
        <ContentLoader
          backgroundColor={colorPalette.green100}
          foregroundColor={colorPalette.green300}
          foregroundOpacity={0.75}
          gradientRatio={0.5}
          height={30}
          speed={1}
          style={{
            display: "block",
            height: "30",
            left: "0",
            top: "0",
            width: "30"
          }}
          title="Loading, please wait..."
        >
          <rect x="0" y="0" rx="5" ry="5" width="30" height="30" />
        </ContentLoader>
    
        <Text
          as="h2"
          fontSize="font20"
          fontWeight="medium"
          paddingLeft="spacing24"
        >
          Loading...
        </Text>
      </LayoutContainer>
    );
  } else {
    return (
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
  }
}

HolidaysDetails.propTypes = {
  alt: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  src: PropTypes.string.isRequired
};

export { HolidaysDetails };
