import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      breakpoint640: string;
      breakpoint641: string;
      breakpoint800: string;
    };

    colorPalette: {
      black200: string;
      black400: string;
      blue200: string;
      blue400: string;
      blue600: string;
      gray: string;
      white: string;
    };

    easing: {
      easeInOut: string;
    }

    fontFamilies: {
      FiraCode: string;
    };

    fontSizes: {
      font10: string;
      font12: string;
      font14: string;
      font16: string;
      font20: string;
      font28: string;
      font32: string;
      font36: string;
    };

    fontWeights: {
      light: string;
      medium: string;
      regular: string;
    };

    spacing: {
      spacing0: string;
      spacing2: string;
      spacing4: string;
      spacing8: string;
      spacing12: string;
      spacing16: string;
      spacing20: string;
      spacing24: string;
      spacing28: string;
      spacing32: string;
      spacing36: string;
      spacing40: string;
      spacing48: string;
      spacing56: string;
      spacing64: string;
      spacing96: string;
      spacing128: string;
      spacing400: string;
      spacing500: string;
      spacing800: string;
      spacing1280: string;  
    };

    transitionTimes: {
      fast: string;
    }

    zIndex: {
      layer0: string;
      layer2: string;
      layer9: string;
      layer11: string;
    };
  }
}
