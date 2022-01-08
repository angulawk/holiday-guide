import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { Text } from "UI/atoms/Text";
import { LayoutContainer } from "UI/layout/LayoutContainer";

import { colorPalette } from "styles/variables/colorPalette";

import { ICalendarKeyProps } from "UI/molecules/__typings__/CalendarKey";
import { TColorPalette } from "styles/variables/__typings__/variables";

const CalendarKeySquare = styled.div`
  ${({
    color,
    theme: {
      colorPalette,
      spacing: { spacing12 }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${color && color in colorPalette && colorPalette[color as TColorPalette]};
    height: ${spacing12};
    width: ${spacing12};
  `};
`;

const CalendarKey = ({
  calendarKeyText,
  color
}: ICalendarKeyProps): JSX.Element => (
  <LayoutContainer display="flex" paddingBottom="spacing12">
    <CalendarKeySquare color={color} />
    <Text paddingLeft="spacing4">{calendarKeyText}</Text>
  </LayoutContainer>
);

CalendarKey.propTypes = {
  calendarKeyText: PropTypes.string,
  color: PropTypes.oneOf([...Object.keys(colorPalette)])
};

export { CalendarKey };
