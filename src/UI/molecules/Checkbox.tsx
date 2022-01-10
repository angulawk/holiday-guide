import React, { ChangeEvent, useCallback } from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { CheckboxInput } from "UI/atoms/CheckboxInput";
import { Text } from "UI/atoms/Text";
import {
  ICheckboxProps,
  TCheckboxContainerProps
} from "UI/molecules/__typings__/Checkbox";

const CheckboxContainer = styled.label<TCheckboxContainerProps>`
  ${({
    disabled,
    theme: {
      spacing: { spacing0, spacing16, spacing24 }
    }
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    cursor: ${disabled ? "not-allowed" : "pointer"};
    display: flex;
    margin-right: ${spacing16};
    padding-left: ${spacing24};
    position: relative;
    user-select: none;

    :last-child {
      margin-right: ${spacing0};
    }
  `};
`;

const Checkbox = ({
  checked,
  disabled = false,
  id,
  label,
  onChange
}: ICheckboxProps): JSX.Element => {
  const handleCheckboxInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const _checked = event?.target?.checked;

      if (!disabled && onChange) {
        onChange(_checked);
      }
    },
    [disabled, onChange]
  );

  return (
    <CheckboxContainer
      disabled={disabled}
    >
      <Text
        ellipsis
        color={disabled ? "gray" : "black400"}
        display="inline"
        fontSize="font16"
        lineHeight="spacing16"
      >
        {label}
      </Text>

      <CheckboxInput
        checked={checked}
        disabled={disabled}
        id={id}
        onChange={handleCheckboxInputChange}
      />
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export { Checkbox };
