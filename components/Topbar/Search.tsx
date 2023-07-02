import React, { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{ width: 200, height: 50 }}
    />
  );
};

export default Search;
