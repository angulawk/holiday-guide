import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { colorPalette } from "styles/variables/colorPalette";
import { fontSizes } from "styles/variables/fontSizes";
import { fontWeights } from "styles/variables/fontWeights";
import { spacing } from "styles/variables/spacing";

import { TSpacing } from "styles/variables/__typings__/variables";
import { ITextProps } from "UI/atoms/__typings__/Text";

const TextContainer = styled.div<ITextProps>`
  ${({
    color,
    display,
    ellipsis,
    fontSize,
    fontWeight,
    lineHeight,
    paddingBottom,
    paddingTop,
    textAlign,
    textTransform,
    theme: { colorPalette, fontFamilies, fontSizes, fontWeights, spacing }
  }): FlattenSimpleInterpolation => css`
    color: ${color && color in colorPalette && colorPalette[color]};
    display: ${display};
    font-size: ${fontSize && fontSize in fontSizes && fontSizes[fontSize]};
    font-weight: ${fontWeight && fontWeight in fontWeights && fontWeights[fontWeight]};
    line-height: ${(lineHeight &&
      lineHeight in spacing &&
      spacing[lineHeight as TSpacing]) ||
    lineHeight};
    padding-bottom: ${(paddingBottom &&
      paddingBottom in spacing &&
      spacing[paddingBottom]) ||
    paddingBottom};
    padding-top: ${(paddingTop &&
      paddingTop in spacing &&
      spacing[paddingTop]) ||
    paddingTop};
    text-align: ${textAlign && textAlign};
    text-transform: ${textTransform && textTransform};

    ${ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  `};
`;

const Text = (
  {
    as = "p",
    children,
    color = "black500",
    display = "block",
    ellipsis = false,
    fontSize = "font16",
    fontWeight = "regular",
    lineHeight = "1",
    paddingBottom = "spacing0",
    paddingTop = "spacing0",
    textAlign = "left",
    textTransform = "none"
  }: ITextProps
): JSX.Element => (
  <TextContainer
    as={as}
    color={color}
    display={display}
    ellipsis={ellipsis}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    paddingBottom={paddingBottom}
    paddingTop={paddingTop}
    textAlign={textAlign}
    textTransform={textTransform}
  >
    {children}
  </TextContainer>
);

Text.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "p"]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  color: PropTypes.oneOf([...Object.keys(colorPalette)]),
  display: PropTypes.oneOf(["block", "inline"]),
  ellipsis: PropTypes.bool,
  fontSize: PropTypes.oneOf([...Object.keys(fontSizes)]),
  fontWeight: PropTypes.oneOf([...Object.keys(fontWeights)]),
  lineHeight: PropTypes.oneOf([...Object.keys(spacing)]),
  paddingBottom: PropTypes.oneOf([...Object.keys(spacing)]),
  paddingTop: PropTypes.oneOf([...Object.keys(spacing)]),
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  textTransform: PropTypes.oneOf(["none", "lowercase", "uppercase", "capitalize"])
};

export { Text };
