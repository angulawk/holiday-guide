import React from "react";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { TSpacing } from "styles/variables/__typings__/variables";
import { ITextProps } from "UI/atoms/__typings__/Text";

const TextContainer = styled.div<ITextProps>`
  ${({
    color,
    display,
    ellipsis,
    fontFamily,
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
    font-family: ${fontFamily &&
    fontFamily in fontFamilies &&
    fontFamilies[fontFamily]};
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
    fontFamily = "FiraCode",
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
    fontFamily={fontFamily}
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

export { Text };
