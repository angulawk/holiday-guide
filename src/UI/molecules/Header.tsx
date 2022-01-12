import React from "react";

import { Link } from "react-router-dom";

import { breakpoints } from "styles/variables/breakpoints";
import { colorPalette } from "styles/variables/colorPalette";
import { spacing } from "styles/variables/spacing";
import { zIndex } from "styles/variables/zIndex";

import { LayoutContainer } from "UI/layout/LayoutContainer";
import { Image } from "UI/atoms/Image";

const headerCustomCss = `
  background-color: ${colorPalette.white};
  height: ${spacing.spacing80};
  z-index: ${zIndex.layer9};
`;

const headerContainerCustomCss = `
  margin: 0 auto;
  max-width: ${spacing.spacing1280};
  padding: ${spacing.spacing24} ${spacing.spacing48};
  width: 100%;

  @media(max-width: ${breakpoints.breakpoint640}) {
    padding: ${spacing.spacing24} ${spacing.spacing24};
  }
`;

function Header(): JSX.Element {
  return (
    <LayoutContainer
      customCss={headerCustomCss}
      display="flex"
      left="spacing0"
      justifyContent="space-between"
    >
      <LayoutContainer
        customCss={headerContainerCustomCss}
        display="flex"
        justifyContent="flex-start"
      >
        <Link to="/">
          <Image
            alt="Holidays Guide Logo"
            src="/images/svg/Icon-Logo.svg"
          />
        </Link>
      </LayoutContainer>
    </LayoutContainer>
  );
}

export { Header };
