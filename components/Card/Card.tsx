import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes";

interface Props {
  animeId: string;
  animeTitle: string;
  animeImg: string;
  releaseDate: string;
}
export type StackNavigation = StackNavigationProp<RootStackParamList>;

const AnimeCard = (props: Props) => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("AnimeScreen", {
          animeTitle: props.animeTitle,
          animeId: props.animeId,
          animeImg: props.animeImg,
          releaseDate: props.releaseDate,
        } as any)
      }
    >
      <View
        style={{
          borderRadius: 10,
          // marginRight: 15,
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
          <Text
            style={{ fontSize: 24, fontWeight: "bold", color: "#d31a48" }}
            numberOfLines={2}
          >
            {props.animeTitle}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" }}>
            {props.releaseDate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimeCard;

const styles = StyleSheet.create({});
