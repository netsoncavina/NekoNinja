import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { getPopularAnimes, getRecentAnimes } from "../../api/api";
import { Skeleton } from "@rneui/themed";

const Home = () => {
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [recentAnimes, setRecentAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    getPopularAnimes().then((res) => {
      setPopularAnimes(res.data);
    });
    getRecentAnimes().then((res) => {
      setRecentAnimes(res.data);
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#212427" }}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 35,
            color: "white",
            fontFamily: "sans-serif-medium",
            paddingBottom: 10,
          }}
        >
          Popular Anime
        </Text>
        {loading ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Skeleton
              width={200}
              height={300}
              style={{ marginRight: 13, borderRadius: 10 }}
            />
            <Skeleton width={160} height={280} style={{ borderRadius: 10 }} />
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Carousel data={popularAnimes} />
          </View>
        )}
        <Text
          style={{
            fontSize: 35,
            color: "white",
            fontFamily: "sans-serif-medium",
            paddingTop: 20,
            paddingBottom: 10,
          }}
        >
          Recently Released
        </Text>
        {loading ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Skeleton
              width={200}
              height={300}
              style={{ marginRight: 13, borderRadius: 10 }}
            />
            <Skeleton width={160} height={280} style={{ borderRadius: 10 }} />
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Carousel data={recentAnimes} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212427",
    flexDirection: "column",
    padding: 10,
  },
});
