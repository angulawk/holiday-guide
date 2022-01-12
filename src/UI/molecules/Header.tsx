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
  min-height: ${spacing.spacing48};
  padding: ${spacing.spacing24} ${spacing.spacing64};
  z-index: ${zIndex.layer9};

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
      position="fixed"
      right="spacing0"
      top="spacing0"
    >
      <Link to="/">
        <Image
          alt="Holidays Guide Logo"
          src="/images/svg/Icon-Logo.svg"
        />
      </Link>
    </LayoutContainer>
  );
}

export { Header };
