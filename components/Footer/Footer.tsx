import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";

const Footer = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        padding: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#212427",

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>
          App developed with React Native and{" "}
        </Text>
        <Text
          onPress={() => Linking.openURL("https://api.enime.moe")}
          style={{
            textDecorationLine: "underline",
            color: "white",
          }}
        >
          Enime API
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ color: "white", padding: 5 }}>
          Made by{" "}
          <Text
            onPress={() => Linking.openURL("https://github.com/netsoncavina")}
            style={{
              textDecorationLine: "underline",
              color: "white",
            }}
          >
            @netsoncavina
          </Text>
        </Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://github.com/netsoncavina/NekoNinja")
          }
          style={{
            padding: 5,
          }}
        >
          <Image
            source={require("../../assets/github-icon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
