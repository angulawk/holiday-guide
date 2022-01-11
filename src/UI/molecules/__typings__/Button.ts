import { TColorPalette } from "styles/variables/__typings__/variables";

export interface IButtonContainerProps {
  backgroundColor?: TColorPalette | "transparent";
  borderColor?: TColorPalette;
  isDisabled?: boolean;
}

export interface IButtonProps {
  buttonText: string;
  isDisabled?: boolean;
  onClick?: () => unknown;
  type?: "primary" | "secondary";
}

interface ITypeToButtonContainerProps {
  backgroundColor: IButtonContainerProps["backgroundColor"];
  borderColor: IButtonContainerProps["borderColor"];
}

export interface IMapTypeToButtonContainerProps {
  primary: ITypeToButtonContainerProps;
  secondary: ITypeToButtonContainerProps;
}
