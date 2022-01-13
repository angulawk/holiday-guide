import React, { useContext, useEffect, useMemo } from "react";

import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import { Text } from "UI/atoms/Text";
import { Image } from "UI/atoms/Image";
import { PageContainer } from "UI/atoms/PageContainer";
import { Table } from "UI/organisms/Table";
import { SearchInput } from "UI/molecules/SearchInput";
import { LayoutContainer } from "UI/layout/LayoutContainer";
import { IGlobalContext } from "providers/__typings__/GlobalProvider";
import { GlobalContext } from "providers/GlobalProvider";

function CountryListContainer(): JSX.Element {
  const { countryList, isGettingCountryList } = useContext<IGlobalContext>(GlobalContext);

  const search = useLocation().search;
  const navigate = useNavigate();

  const searchQueryParamValue = new URLSearchParams(search).get("search");

  const { control, watch } = useForm({ defaultValues: { Search: searchQueryParamValue } });
  const searchValue = watch("Search") as string;
  
  useEffect(() => {
    if(searchValue) {
      navigate(`/?search=${searchValue}`);
    } else {
      navigate("/");
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
        fontSize="font24"
        fontWeight="light"
        paddingBottom="spacing24"
      >
        Countries List
      </Text>

      <LayoutContainer
        backgroundColor="white"
        position="sticky"
        left="spacing48"
        top="spacing0"
        zIndex="layer9"
      >
        <SearchInput
          control={control}
        />
      </LayoutContainer>

      <Table
        columns={columns}
        data={tableData || []}
        isLoading={isGettingCountryList}
      />
    </PageContainer>      
  );
}

export { CountryListContainer };
