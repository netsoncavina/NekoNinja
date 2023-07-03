import "./utils/IgnoreWarnings";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import Topbar from "./components/Topbar/Topbar";
import Routes from "./routes";
import SearchResult from "./components/SearchResult/SearchResult";
export default function App() {
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [queryLength, setQueryLength] = useState(0);

  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Topbar
        showTopbar={topBarVisible}
        setSearchData={setSearchData}
        setQueryLength={setQueryLength}
      />
      <NavigationContainer>
        <SearchResult
          data={searchData}
          isVisible={true}
          queryLength={queryLength}
          setQueryLength={setQueryLength}
        />
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
