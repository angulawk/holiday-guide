import React, { useMemo, useState } from "react";

import { useCountryList } from "hooks/api/useCountryList";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { PageContainer } from "UI/atoms/PageContainer";
import { Table } from "UI/organisms/Table";
import { SearchInput } from "UI/molecules/SearchInput";

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};
  const [searchValue, setSearchValue] = useState<string>("");

  const tableData = useMemo(
    () =>
      countryList?.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase())).map(({ name, alpha2Code, alpha3Code }) => ({
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
        onChange={(_value: string) => setSearchValue(_value)}
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
