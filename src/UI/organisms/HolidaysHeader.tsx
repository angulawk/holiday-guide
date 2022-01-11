import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { breakpoints } from "styles/variables/breakpoints";
import { spacing } from "styles/variables/spacing";

import { LayoutContainer } from "UI/layout/LayoutContainer";
import { Button } from "UI/molecules/Button";
import { HolidaysDetails } from "UI/molecules/HolidaysDetails";
import { Checkbox } from "UI/molecules/Checkbox";

import {
  IHolidaysHeaderProps
} from "UI/organisms/__typings__/HolidaysHeader";

const holidaysContainerCustomCss = `
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media(max-width: ${breakpoints.breakpoint640}) {
    flex-flow: column nowrap;
    justify-content: center;  
  }
`;

const holidaysContainerButtonCustomCss = `
  @media(max-width: ${breakpoints.breakpoint640}) {
    margin-top: ${spacing.spacing16}; 
  }
`;

const holidaysContainerCheckboxes = `
  justify-content: flex-start;

  @media(max-width: ${breakpoints.breakpoint640}) {
    justify-content: center;
  }
`;

function HolidaysHeader({
  alt,
  control,
  countryName,
  imageSrc,
  isLoading,
  onClick
}: IHolidaysHeaderProps): JSX.Element {
  return (
    <Fragment>
      <LayoutContainer
        customCss={holidaysContainerCustomCss}
      >
        <HolidaysDetails
          alt={alt}
          countryName={countryName}
          isLoading={isLoading || !countryName}
          src={imageSrc}
        />

        <LayoutContainer customCss={holidaysContainerButtonCustomCss}>
          <Button
            buttonText="Back to country list"
            isDisabled={isLoading}
            onClick={onClick}
            type="secondary"
          />
        </LayoutContainer>
      </LayoutContainer>

      <LayoutContainer
        customCss={holidaysContainerCheckboxes}
        display="flex"
        justifyContent="flex-start"
        marginTop="spacing36"
      >
        <Checkbox
          control={control}
          disabled={isLoading}
          label="Public holidays"
          name="PublicHolidays"
        />

        <Checkbox
          control={control}
          disabled={isLoading}
          label="Non public holidays"
          name="NonPublicHolidays"
        />
      </LayoutContainer>
    </Fragment>
  );
}

HolidaysHeader.propTypes = {
  alt: PropTypes.string,
  control: PropTypes.object,
  countryName: PropTypes.string,
  imageSrc: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
};

export { HolidaysHeader };
