import React from "react";

import { colorPalette } from "styles/variables/colorPalette";
import { spacing } from "styles/variables/spacing";
import { zIndex } from "styles/variables/zIndex";

import { LayoutContainer } from "UI/layout/LayoutContainer";
import { Image } from "UI/atoms/Image";

const headerCustomCss = `
  background-color: ${colorPalette.white};
  min-height: ${spacing.spacing48};
  z-index: ${zIndex.layer9};
`;

function Header(): JSX.Element {
  return (
    <LayoutContainer
      customCss={headerCustomCss}
      display="flex"
      left="spacing0"
      justifyContent="space-between"
      paddingLeft="spacing64"
      paddingRight="spacing64"
      position="fixed"
      right="spacing0"
      top="spacing0"
    >
      <Image
        alt="Holidays Guide Logo"
        src="/images/svg/Icon-Logo.svg"
      />
    </LayoutContainer>
  );
}

export { Header };
