import React, { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { searchAnime } from "../../api/api";

interface Props {
  setSearchData: any;
  setQueryLength: any;
}

const Search = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    searchAnime(query).then((res) => {
      // console.log(res.data);
      props.setSearchData(res.data);
    });
    props.setQueryLength(query.length);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{ width: 280, height: 50 }}
    />
  );
};

export default Search;
