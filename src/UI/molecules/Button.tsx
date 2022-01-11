import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { TColorPalette } from "styles/variables/__typings__/variables";

import {
  IButtonProps,
  IButtonContainerProps,
  IMapTypeToButtonContainerProps
} from "UI/molecules/__typings__/Button";

const mapTypeToButtonContainerProps: IMapTypeToButtonContainerProps = {
  primary: {
    backgroundColor: "green300",
    borderColor: "green200"
  },
  secondary: {
    backgroundColor: "green400",
    borderColor: "green200"
  }
};

const ButtonContainer = styled.button<IButtonContainerProps>`
  ${({
    backgroundColor,
    borderColor,
    isDisabled,
    theme: {
      colorPalette,
      easing: { easeInOut },
      fontSizes: { font16 },
      spacing: { spacing8, spacing12, spacing40 },
      transitionTimes: { fast }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${(backgroundColor &&
      backgroundColor in colorPalette &&
      colorPalette[backgroundColor as TColorPalette]) ||
    backgroundColor};
    border: 1px solid;
    border-color: ${borderColor &&
      borderColor in colorPalette &&
      colorPalette[borderColor]};  
    color: ${colorPalette.white};
    cursor: pointer;
    font-size: ${font16};
    height: ${spacing40};
    padding: ${spacing8} ${spacing12};
    transition: background-color ${fast} ${easeInOut};

    ${isDisabled ? `
      background: ${colorPalette.white};
      border: thin solid ${colorPalette.gray200};
      color: ${colorPalette.gray200};
      cursor: not-allowed;
    ` : `
      &:hover {
        background-color: ${colorPalette.green200};
      }
    `}
  `};
`;

const Button = ({
  buttonText,
  isDisabled,
  onClick,
  type = "primary"
}: IButtonProps): JSX.Element => (
  <ButtonContainer
    {...mapTypeToButtonContainerProps[type]}
    isDisabled={isDisabled}
    onClick={onClick}
  >
    {buttonText}
  </ButtonContainer>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary"])
};

export { Button };
