import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      breakpoint640: string;
      breakpoint641: string;
      breakpoint800: string;
    };

    colorPalette: {
      black100: string;
      black200: string;
      green100: string;
      green200: string;
      green300: string;
      green400: string;
      gray100: string;
      gray200: string;
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
      font24: string;
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
      spacing36: string;
      spacing40: string;
      spacing48: string;
      spacing56: string;
      spacing80: string;
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
    };
  }
}
