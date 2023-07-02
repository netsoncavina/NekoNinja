import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

interface Props {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releaseDate: string;
}

const AnimeCard = (props: Props) => {
  return (
    <View
      style={{
        borderRadius: 10,
      }}
    >
      <Image
        source={{ uri: props.animeImg }}
        style={{ width: 200, height: 300, borderRadius: 10 }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: "rgba(0,0,0,0.8)",
          position: "absolute",
          bottom: 0,
          width: 200,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#d31a48" }}>
          {props.animeTitle}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" }}>
          {props.releaseDate}
        </Text>
      </View>
    </View>
  );
};

export default AnimeCard;

const styles = StyleSheet.create({});
