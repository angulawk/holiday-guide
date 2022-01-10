import React from "react";

import PropTypes from "prop-types";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { Controller } from "react-hook-form";

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
      spacing: { spacing0, spacing12, spacing16, spacing24 }
    }
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    cursor: ${disabled ? "not-allowed" : "pointer"};
    display: flex;
    margin-bottom: ${spacing12};
    margin-right: ${spacing16};
    padding-left: ${spacing24};
    position: relative;
    user-select: none;

    &:last-child {
      margin-right: ${spacing0};
    }
  `};
`;

const Checkbox = ({
  control,
  disabled = false,
  label,
  name
}: ICheckboxProps): JSX.Element => (
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

    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <CheckboxInput
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
          checked={value}
        />
      )}
    />
  </CheckboxContainer>
);

Checkbox.propTypes = {
  control: PropTypes.object,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.oneOf(["NonPublicHolidays", "PublicHolidays"])
};

export { Checkbox };
