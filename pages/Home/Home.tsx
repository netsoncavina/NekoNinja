import { StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Carousel from "./Carousel";
import { getPopularAnimes, getRecentAnimes } from "../../api/api";

const Home = () => {
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [recentAnimes, setRecentAnimes] = useState([]);

  useEffect(() => {
    getPopularAnimes().then((res) => {
      setPopularAnimes(res.data);
    });
    getRecentAnimes().then((res) => {
      setRecentAnimes(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 35,
          color: "white",
          fontFamily: "sans-serif-medium",
          paddingBottom: 10,
        }}
      >
        Animes Populares
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Carousel data={popularAnimes} />
      </View>
      <Text
        style={{
          fontSize: 35,
          color: "white",
          fontFamily: "sans-serif-medium",
          paddingBottom: 10,
        }}
      >
        Lançados Recentemente
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Carousel data={recentAnimes} />
      </View>
    </View>
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
