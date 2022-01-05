import React from "react";

import {
  TColorPalette,
  TSpacing,
  TZIndex
} from "styles/variables/__typings__/variables";

export interface ILayoutContainerProps {
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  backgroundColor?: TColorPalette;
  bottom?: TSpacing | "unset" | "50%" | "100%";
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string;
  customCss?: string;
  display?: "block" | "inline-block" | "flex" | "inline-flex" | "grid";
  flex?: string;
  flexFlow?:
    | "row wrap"
    | "row nowrap"
    | "column wrap"
    | "column nowrap"
    | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "stretch"
    | "space-around";
  left?: TSpacing | "50%" | "100%";
  marginBottom?: TSpacing | "auto" | string;
  marginLeft?: TSpacing | "auto" | string;
  marginRight?: TSpacing | "auto" | string;
  marginTop?: TSpacing | "auto" | string;
  maxHeight?: string;
  maxWidth?: TSpacing | string;
  minHeight?: TSpacing;
  minWidth?: TSpacing | "auto";
  paddingBottom?: TSpacing | "auto" | string;
  paddingLeft?: TSpacing | "auto" | string;
  paddingRight?: TSpacing | "auto" | string;
  paddingTop?: TSpacing | "auto" | string;
  position?: "static" | "relative" | "fixed" | "sticky" | "absolute";
  right?: TSpacing | "unset" | "50%" | "100%";
  top?: TSpacing | "unset" | "50%" | "100%";
  zIndex?: TZIndex;
}
