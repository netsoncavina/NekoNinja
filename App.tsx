import "./utils/IgnoreWarnings";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import Topbar from "./components/Topbar/Topbar";
import Routes from "./routes";

export default function App() {
  const [topBarVisible, setTopBarVisible] = useState(true);
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Topbar showTopbar={topBarVisible} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
