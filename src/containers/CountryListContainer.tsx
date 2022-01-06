import React, { useMemo } from "react";

import { useCountryList } from "hooks/api/useCountryList";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { PageContainer } from "UI/atoms/PageContainer";
import { Table } from "UI/organisms/Table";

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};

  const tableData = useMemo(
    () =>
      countryList?.map(({ name, alpha2Code, alpha3Code }) => ({
        alpha3Code,
        name,
        flag: (
          <Image alt="some alt" src={`https://flagcdn.com/32x24/${alpha2Code.toLowerCase()}.png`} />
        )
      })), [countryList]
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

      <Table
        columns={columns}
        data={tableData || []}
        isLoading={isGettingCountryList}
      />
    </PageContainer>      
  );
}

export { CountryListContainer };
