import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { PaperProvider } from "react-native-paper";
import Topbar from "./components/Topbar/Topbar";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Topbar />

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
