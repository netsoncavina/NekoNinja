import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { getAnimeInfo } from "../../api/api";
import Tag from "../../components/Tag/Tag";

interface Props {
  animeTitle: string;
  animeId: string;
  animeImg: string;
  releaseDate: string;
}

interface Anime {
  genre: string[];
  description: string;
  episodes: string[];
  color: string;
}

const AnimeScreen = ({ route, navigation }: any) => {
  const { animeTitle, animeId, animeImg, releaseDate } = route.params;
  const [anime, setAnime] = useState<Anime>({
    genre: [],
    description: "",
    episodes: [],
    color: "",
  });
  const [width, setWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    getAnimeInfo(animeId).then((res) => {
      setAnime(res);
      //   console.log(anime);
    });
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: "#212427",
        padding: 20,
        width: width,
        display: "flex",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: animeImg }}
          style={{ width: 200, height: 300, borderRadius: 10 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 26,
              color: "white",
              fontFamily: "sans-serif-medium",
              paddingLeft: 10,
              flex: 1,
              flexWrap: "wrap",
              width: 150,
            }}
            numberOfLines={3}
          >
            {animeTitle}
          </Text>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 10,
              //   flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
              width: 150,
            }}
          >
            {anime.genre?.map((genre: string) => (
              <Tag text={genre} color={anime.color} />
            ))}
          </View>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontFamily: "sans-serif-medium",
              paddingLeft: 10,
            }}
          >
            {anime.episodes ? `${anime.episodes?.length} episódios` : " "}
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "column", paddingTop: 20, paddingBottom: 50 }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontFamily: "sans-serif-medium",
            paddingBottom: 10,
          }}
        >
          Sinopse
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>
          {anime.description
            ? anime.description?.replace(/<[^>]*>?/gm, "") || "Sem sinopse"
            : null}
        </Text>
      </View>
    </ScrollView>
  );
};

export default AnimeScreen;

const styles = StyleSheet.create({});
