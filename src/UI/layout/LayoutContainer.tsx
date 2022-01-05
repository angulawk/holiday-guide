import React from "react";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { TSpacing } from "styles/variables/__typings__/variables";

import { ILayoutContainerProps } from "UI/layout/__typings__/LayoutContainer";

const LayoutContainerWrapper = styled.div<ILayoutContainerProps>`
  ${({
    alignItems,
    backgroundColor,
    bottom,
    customCss,
    display,
    flex,
    flexFlow,
    height,
    justifyContent,
    left,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    position,
    right,
    theme: { colorPalette, spacing, zIndex: zIndexVariables },
    top,
    width,
    zIndex
  }): FlattenSimpleInterpolation => css`
    align-items: ${alignItems};
    background-color: ${(backgroundColor &&
      backgroundColor in colorPalette &&
      colorPalette[backgroundColor]) ||
    backgroundColor};
    bottom: ${(bottom && bottom in spacing && spacing[bottom as TSpacing]) || bottom};
    display: ${display && display};
    flex: ${flex && flex};
    flex-flow: ${flexFlow && flexFlow};
    height: ${height && height in spacing && spacing[height as TSpacing] || height};
    justify-content: ${justifyContent && justifyContent};
    left: ${(left && left in spacing && spacing[left as TSpacing]) || left};
    margin-bottom: ${(marginBottom &&
      marginBottom in spacing &&
      spacing[marginBottom as TSpacing]) ||
    marginBottom};
    margin-left: ${(marginLeft &&
      marginLeft in spacing &&
      spacing[marginLeft as TSpacing]) ||
    marginLeft};
    margin-right: ${(marginRight &&
      marginRight in spacing &&
      spacing[marginRight as TSpacing]) ||
    marginRight};
    margin-top: ${(marginTop && marginTop in spacing && spacing[marginTop as TSpacing]) ||
    marginTop};
    max-height: ${maxHeight && maxHeight};
    max-width: ${(maxWidth && maxWidth in spacing && spacing[maxWidth as TSpacing]) ||
    maxWidth};
    min-height: ${(minHeight && minHeight in spacing && spacing[minHeight]) ||
    minHeight};
    min-width: ${(minWidth && minWidth in spacing && spacing[minWidth as TSpacing]) ||
    minWidth};
    padding-bottom: ${(paddingBottom &&
      paddingBottom in spacing &&
      spacing[paddingBottom as TSpacing]) ||
    paddingBottom};
    padding-left: ${(paddingLeft &&
      paddingLeft in spacing &&
      spacing[paddingLeft as TSpacing]) ||
    paddingLeft};
    padding-right: ${(paddingRight &&
      paddingRight in spacing &&
      spacing[paddingRight as TSpacing]) ||
    paddingRight};
    padding-top: ${(paddingTop &&
      paddingTop in spacing &&
      spacing[paddingTop as TSpacing]) ||
    paddingTop};
    position: ${position && position};
    right: ${(right && right in spacing && spacing[right as TSpacing]) || right};
    top: ${(top && top in spacing && spacing[top as TSpacing]) || top};
    width: ${(width && width in spacing && spacing[width as TSpacing]) || width};
    z-index: ${zIndex && zIndex in zIndexVariables && zIndexVariables[zIndex]};

    ${customCss};
  `};
`;

const LayoutContainer = (
  {
    alignItems = "center",
    backgroundColor,
    bottom = "unset",
    children,
    customCss,
    display = "block",
    flex = "none",
    flexFlow = "row wrap",
    height = "auto",
    justifyContent = "center",
    left = "spacing0",
    marginBottom = "spacing0",
    marginLeft = "spacing0",
    marginRight = "spacing0",
    marginTop = "spacing0",
    maxHeight = "initial",
    maxWidth = "initial",
    minHeight = "spacing0",
    minWidth = "spacing0",
    paddingBottom = "spacing0",
    paddingLeft = "spacing0",
    paddingRight = "spacing0",
    paddingTop = "spacing0",
    position = "relative",
    right = "spacing0",
    top = "spacing0",
    width = "auto",
    zIndex = "layer0"
  }: ILayoutContainerProps
): JSX.Element => (
  <LayoutContainerWrapper
    alignItems={alignItems}
    backgroundColor={backgroundColor}
    bottom={bottom}
    customCss={customCss}
    display={display}
    flex={flex}
    flexFlow={flexFlow}
    height={height}
    justifyContent={justifyContent}
    left={left}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    maxHeight={maxHeight}
    maxWidth={maxWidth}
    minHeight={minHeight}
    minWidth={minWidth}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    position={position}
    right={right}
    top={top}
    width={width}
    zIndex={zIndex}
  >
    {children}
  </LayoutContainerWrapper>
);

export { LayoutContainer };
