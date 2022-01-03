import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colorPalette: {
      black400: string;
      black500: string;
      blue200: string;
      blue400: string;
    };
  }
}
