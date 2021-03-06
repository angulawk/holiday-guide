import {
  TColorPalette,
  TFontSizes,
  TFontWeights,
  TSpacing
} from "styles/variables/__typings__/variables";

export interface ITextProps {
  as?: "h1" | "h2" | "h3" | "p";
  children: string | number | JSX.Element | React.ReactNode;
  color?: TColorPalette;
  display?: "block" | "inline";
  ellipsis?: boolean;
  fontSize?: TFontSizes;
  fontWeight?: TFontWeights;
  lineHeight?: TSpacing | "1";
  paddingBottom?: TSpacing;
  paddingLeft?: TSpacing;
  paddingRight?: TSpacing;
  paddingTop?: TSpacing;
  textAlign?: "left" | "center" | "right";
  textTransform?: "none" | "lowercase" | "uppercase" | "capitalize";
}
