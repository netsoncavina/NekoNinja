import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Topbar from "./components/Topbar/Topbar";

export default function App() {
  const [topBarVisible, setTopBarVisible] = useState(true);
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Topbar showTopbar={topBarVisible} />

      <View style={styles.container}></View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
