import React from "react";
import { View, Text, Image } from "react-native";
import { Appbar } from "react-native-paper";

const Topbar = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "#212427" }}>
      <Image
        source={require("../../assets/neko-ninja.png")}
        style={{ width: 50, height: 50 }}
      />
      <Appbar.Content title="Neko Ninja" color="white" />
    </Appbar.Header>
  );
};

export default Topbar;
