import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import EpisodeButton from "./EpisodeButton";

interface Props {
  animeTitle: string;
  episodes: Array<any>;
  color: string;
}

const EpisodesScreen = ({ route }: any) => {
  const { animeTitle, episodes, color } = route.params;
  //   console.log(episodes);

  return (
    <ScrollView>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
          backgroundColor: "#212427",
          borderRadius: 10,
          margin: 10,
        }}
      >
        {animeTitle}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          padding: 10,
          backgroundColor: "#212427",
          borderRadius: 10,
          margin: 10,
        }}
      >
        List of Episodes
      </Text>
      <View
        style={{
          backgroundColor: "#212427",
          padding: 5,

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {episodes.map((episode: any) => (
          <EpisodeButton
            key={episode.id}
            episodeNumber={episode.number}
            episodeTitle={episode.title}
            episodeId={episode.id}
            color={color}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default EpisodesScreen;

const styles = StyleSheet.create({});
