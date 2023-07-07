import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Skeleton } from "@rneui/themed";
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
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    });
  }, []);

  return episode.title === null &&
    episode.description === null &&
    episode.airedAt === null &&
    episode.image === null ? (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: "80%" }}
    >
      <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
        No data about this episode
      </Text>
      <Image
        source={require("../../assets/sad.png")}
        style={{ width: 200, height: 200 }}
      />
    </View>
  ) : (
    <ScrollView>
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 20 }}
      >
        {loading ? (
          <>
            <Skeleton
              animation="wave"
              width={200}
              height={200}
              style={{
                borderRadius: 20,
                padding: 5,
                margin: 5,
              }}
            />
            <Skeleton
              animation="wave"
              width={330}
              height={100}
              style={{
                borderRadius: 20,
                padding: 5,
                margin: 5,
              }}
            />
          </>
        ) : (
          <>
            <Image
              source={{ uri: episode.image }}
              style={{ width: 200, height: 200, borderRadius: 20 }}
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
          </>
        )}
      </View>
      {loading ? (
        <Skeleton
          animation="wave"
          width={200}
          height={40}
          style={{
            borderRadius: 20,
            padding: 5,
            margin: 5,
          }}
        />
      ) : (
        <Text
          style={{
            color: "white",
            fontSize: 20,
            paddingLeft: 10,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {episode.airedAt === null
            ? "No date"
            : "Aired at " +
              episode.airedAt.split("T")[0].split("-").reverse().join("/")}
        </Text>
      )}
      {loading ? null : (
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
      )}
      {loading ? (
        <>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                animation="wave"
                width={380}
                height={20}
                style={{
                  marginTop: 10,
                  borderRadius: 20,
                  //   padding: 5,
                  margin: 5,
                }}
              />
            ))}
        </>
      ) : (
        <Text
          style={{
            color: "white",
            fontSize: 20,
            padding: 10,
          }}
        >
          {episode.description}
        </Text>
      )}
    </ScrollView>
  );
};

export default EpisodeDetailScreen;

const styles = StyleSheet.create({});
