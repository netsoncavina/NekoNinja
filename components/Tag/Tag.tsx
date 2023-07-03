import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  text: string;
  color: string;
}

const Tag = ({ text, color }: Props) => {
  return (
    <View
      style={{
        width: 120,
        backgroundColor: color,
        borderRadius: 20,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          color: "white",
          fontFamily: "sans-serif-medium",
        }}
        numberOfLines={1}
      >
        {text}
      </Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({});
