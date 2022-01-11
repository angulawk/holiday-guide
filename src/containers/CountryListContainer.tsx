import React, { useEffect, useMemo } from "react";

import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import { useCountryList } from "hooks/api/useCountryList";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { PageContainer } from "UI/atoms/PageContainer";
import { Table } from "UI/organisms/Table";
import { SearchInput } from "UI/molecules/SearchInput";

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useCountryList() || {};

  const search = useLocation().search;
  const navigate = useNavigate();

  const searchQueryParamValue = new URLSearchParams(search).get("search");

  const { control, watch } = useForm({ defaultValues: { Search: searchQueryParamValue } });
  const searchValue = watch("Search") as string;
  
  useEffect(() => {
    if(searchValue) {
      navigate(`/?search=${searchValue}`);
    }
  }, [navigate, searchValue]);

  const tableData = useMemo(
    () => {
      const _countryList = searchValue ? countryList?.filter(({ name }) => name?.toLowerCase().includes(searchValue?.toLowerCase())) : countryList;

      return _countryList.map(({ name, alpha2Code, alpha3Code }) => ({
        alpha2Code,
        alpha3Code,
        name,
        flag: (
          <Image alt={`${name} flag`} src={`https://flagcdn.com/32x24/${alpha2Code.toLowerCase()}.png`} />
        )
      }));
    }, [countryList, searchValue]
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
