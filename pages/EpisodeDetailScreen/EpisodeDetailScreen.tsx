import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getEpisodeInfo } from "../../api/api";

interface Episode {
  number: string;
  title: string;
  description: string;
  airedAt: string;
  image: string;
}

const EpisodeDetailScreen = ({ route }: any) => {
  const { episodeId } = route.params;
  const [episode, setEpisode] = useState<Episode>({
    image: "",
    number: "",
    title: "",
    description: "",
    airedAt: "", //airedAt
  });

  useEffect(() => {
    getEpisodeInfo(episodeId).then((res) => {
      setEpisode(res);
    });
  }, []);

  return (
    <>
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 20 }}
      >
        <Image
          source={{ uri: episode.image }}
          style={{ width: 200, height: 200 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            padding: 10,
            textAlign: "center",
          }}
        >
          {episode.number} - {episode.title}
        </Text>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          paddingLeft: 10,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        Aired at {episode.airedAt.split("T")[0].split("-").reverse().join("/")}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          padding: 10,
        }}
      >
        Description
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          padding: 10,
        }}
      >
        {episode.description}
      </Text>
    </>
  );
};

export default EpisodeDetailScreen;

const styles = StyleSheet.create({});
