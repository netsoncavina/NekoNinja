import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import { useNavigation } from "@react-navigation/native";

export type StackNavigation = StackNavigationProp<RootStackParamList>;

interface Props {
  episodeNumber: number;
  episodeTitle: string;
  episodeId: string;
  color: string;
}

const EpisodeButton = ({
  episodeId,
  episodeNumber,
  episodeTitle,
  color,
}: Props) => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("EpisodeDetailScreen", { episodeId: episodeId })
      }
    >
      <View
        style={{
          width: 45,
          backgroundColor: color,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          padding: 5,
          margin: 5,
        }}
      >
        <Text>{episodeNumber}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeButton;

const styles = StyleSheet.create({});
