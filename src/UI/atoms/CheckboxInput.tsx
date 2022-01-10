import React, { Fragment } from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  ICheckboxInputProps,
  ICheckboxVisibleInputProps
} from "UI/atoms/__typings__/CheckboxInput";

const CheckboxHidden = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`;

const CheckboxVisible = styled.div<ICheckboxVisibleInputProps>`
  ${({
    checked,
    disabled,
    theme: {
      colorPalette: { blue400, gray },
      easing: { easeInOut },
      spacing: { spacing8, spacing16 },
      transitionTimes: { fast }
    }
  }): FlattenSimpleInterpolation => css`
    border: thin solid ${disabled ? gray : blue400};
    box-shadow: ${checked ? `0px 0px 2px ${blue400}` : "none"};
    height: ${spacing16};
    left: 0;
    position: absolute;
    top: 0;
    transition: all ${fast} ${easeInOut};
    width: ${spacing16};

    &::after {
      background-color: ${disabled ? gray : blue400};
      content: "";
      display: block;
      height: ${spacing8};
      left: 50%;
      opacity: ${checked ? "1" : "0"};
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: opacity ${fast} ${easeInOut};
      width: ${spacing8};
    }
  `};
`;

const CheckboxInput = ({
  checked,
  disabled = false,
  id,
  onChange
}: ICheckboxInputProps): JSX.Element => (
  <Fragment>
    <CheckboxHidden
      checked={checked}
      disabled={disabled}
      id={id}
      onChange={onChange}
      type="checkbox"
    />

    <CheckboxVisible
      checked={checked}
      disabled={disabled}
    />
  </Fragment>
);

CheckboxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export { CheckboxInput };
