import { colorPalette } from "styles/variables/colorPalette";
import { fontFamilies } from "styles/variables/fontFamilies";
import { fontSizes } from "styles/variables/fontSizes";
import { spacing } from "styles/variables/spacing";
import { zIndex } from "styles/variables/zIndex";

export type TColorPalette = keyof typeof colorPalette;
export type TFontFamilies = keyof typeof fontFamilies;
export type TFontSizes = keyof typeof fontSizes;
export type TSpacing = keyof typeof spacing;
export type TZIndex = keyof typeof zIndex;
