import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { getAnimeInfo, searchAnime } from "../../api/api";
import { Skeleton } from "@rneui/themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import Tag from "../../components/Tag/Tag";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export type StackNavigation = StackNavigationProp<RootStackParamList>;

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
  status?: string;
}

const AnimeScreen = ({ route }: any) => {
  const { animeTitle, animeId, animeImg, releaseDate } = route.params;
  const [anime, setAnime] = useState<Anime>({
    genre: [],
    description: "",
    episodes: [],
    color: "",
    status: "",
  });
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<StackNavigation>();

  useEffect(() => {
    searchAnime(animeTitle).then((res) => {
      getAnimeInfo(res.data[0].id).then((res) => {
        setLoading(false);
        setAnime(res);
      });
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
      <Breadcrumb pages={[animeTitle]} />
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
              justifyContent: "center",
              alignItems: "center",
              height: 250,
              width: 150,
            }}
          >
            {loading ? (
              <>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      animation="wave"
                      width={120}
                      height={20}
                      style={{
                        width: 120,
                        borderRadius: 20,
                        padding: 5,
                        margin: 5,
                      }}
                    />
                  ))}
              </>
            ) : (
              <>
                {anime.genre?.map((genre: string, index) => (
                  <Tag key={index} text={genre} color={anime.color} />
                ))}
              </>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontFamily: "sans-serif-medium",
          }}
        >
          {anime.episodes.length > 0 ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EpisodesScreen", {
                  animeTitle: animeTitle,
                  episodes: anime.episodes,
                  color: anime.color,
                } as any)
              }
            >
              <Tag
                text={`${anime.episodes.length} episodes`}
                color={anime.color + "80"}
              />
            </TouchableOpacity>
          ) : null}
        </Text>
        {loading ? null : (
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontFamily: "sans-serif-medium",
            }}
          >
            {releaseDate ? `Release year: ${releaseDate}` : null}
          </Text>
        )}
      </View>

      {anime.status ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontFamily: "sans-serif-medium",
            }}
          >
            Status:
          </Text>
          <Tag
            text={anime.status}
            color={
              anime.status === "RELEASING"
                ? "#03cafc"
                : anime.status === "FINISHED"
                ? "#00ff00"
                : "#ff0000"
            }
          />
        </View>
      ) : (
        ""
      )}
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
          Description
        </Text>

        {loading ? (
          <>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  animation="wave"
                  width={width - 50}
                  height={20}
                  style={{ marginTop: 10 }}
                />
              ))}
          </>
        ) : (
          <Text style={{ fontSize: 15, color: "white" }}>
            {anime.description
              ? anime.description?.replace(/<[^>]*>?/gm, "") || "Sem sinopse"
              : null}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default AnimeScreen;

const styles = StyleSheet.create({});
