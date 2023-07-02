import { StyleSheet, View } from "react-native";
import React from "react";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <View style={styles.container}>
      <Card
        animeId="clfrxcp4k05y4kslugje476e5"
        animeImg="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-YJvLbgJQPCoI.jpg"
        animeTitle="Naruto"
        releaseDate="2002"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212427",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
