import React from "react";

import PropTypes from "prop-types";

import { Controller } from "react-hook-form";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ISearchInputProps } from "UI/molecules/__typings__/SearchInput";

const Input = styled.input`
  ${({
    theme: {
      colorPalette: { green300 },
      fontSizes: { font16 },
      spacing: { spacing12 }
    }
  }): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${green300};
    font-size: ${font16};
    margin-bottom: ${spacing12};
    margin-top: ${spacing12};
  `};
`;

const SearchInput = ({
  control
}: ISearchInputProps): JSX.Element => (
  <Controller
    control={control}
    name="Search"
    render={({ field }) => (
      <Input
        {...field}
        type="search"
        placeholder="Search Country"
        value={field?.value || ""}
      />
    )}
  />
);

SearchInput.propTypes = {
  control: PropTypes.object
};

export { SearchInput };
