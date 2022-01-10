import { breakpoints } from "styles/variables/breakpoints";
import { colorPalette } from "styles/variables/colorPalette";
import { fontFamilies } from "styles/variables/fontFamilies";
import { fontSizes } from "styles/variables/fontSizes";
import { fontWeights } from "styles/variables/fontWeights";
import { spacing } from "styles/variables/spacing";
import { zIndex } from "styles/variables/zIndex";

export type TBreakpoints = keyof typeof breakpoints;
export type TColorPalette = keyof typeof colorPalette;
export type TFontFamilies = keyof typeof fontFamilies;
export type TFontSizes = keyof typeof fontSizes;
export type TFontWeights = keyof typeof fontWeights;
export type TSpacing = keyof typeof spacing;
export type TZIndex = keyof typeof zIndex;
