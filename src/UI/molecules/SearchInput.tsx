import React, { useState, useCallback, ChangeEvent } from "react";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ISearchInputProps } from "UI/molecules/__typings__/SearchInput";

const Input = styled.input`
  ${({
    theme: {
      colorPalette: { blue400 },
      fontSizes: { font16 },
      spacing: { spacing24 }
    }
  }): FlattenSimpleInterpolation => css`
    border-bottom: 1px solid ${blue400};
    font-size: ${font16};
    margin-bottom: ${spacing24};
  `};
`;

function SearchInput({
  onChange
}: ISearchInputProps): JSX.Element {
  const [internalValue, setInternalValue] = useState<string>("");

  const handleSearchInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const _value: string = event?.target?.value;

    setInternalValue(_value);
    onChange?.(_value);
  }, [onChange]);

  return (
    <Input 
      type="search" 
      placeholder="Search Country" 
      onChange={handleSearchInputChange}
      value={internalValue}
    />
  );
}

export { SearchInput };
