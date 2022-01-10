import React, { useMemo } from "react";

import { useForm } from "react-hook-form";

import { useCountryList } from "hooks/api/useCountryList";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { PageContainer } from "UI/atoms/PageContainer";
import { Table } from "UI/organisms/Table";
import { SearchInput } from "UI/molecules/SearchInput";

const defaultValues = {
  Search: ""
};

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};

  const { control, watch } = useForm({ defaultValues });
  const searchValue: string = watch().Search; 

  const tableData = useMemo(
    () =>
      countryList?.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase())).map(({ name, alpha2Code, alpha3Code }) => ({
        alpha2Code,
        alpha3Code,
        name,
        flag: (
          <Image alt={`${name} flag`} src={`https://flagcdn.com/32x24/${alpha2Code.toLowerCase()}.png`} />
        )
      })), [countryList, searchValue]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Flag",
        accessor: "flag",
        width: "15%"
      },
      {
        Header: "Name",
        accessor: "name",
        width: "60%"
      },
      {
        Header: "Alpha-3 Code",
        accessor: "alpha3Code",
        width: "25%"
      }
    ],
    []
  );

  return (
    <PageContainer>
      <Text
        as="h2"
        fontSize="font20"
        fontWeight="light"
        paddingBottom="spacing24"
        paddingTop="spacing24"
      >
        Countries List
      </Text>

      <SearchInput
        control={control}
      />

      <Table
        columns={columns}
        data={tableData || []}
        isLoading={isGettingCountryList}
      />
    </PageContainer>      
  );
}

export { CountryListContainer };
