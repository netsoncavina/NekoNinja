import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import AnimeScreen from "../pages/AnimeScreen/AnimeScreen";
import EpisodesScreen from "../pages/EpisodesScreen/EpisodesScreen";
import EpisodeDetailScreen from "../pages/EpisodeDetailScreen/EpisodeDetailScreen";

export type RootStackParamList = {
  Home: undefined;
  AnimeScreen: { animeTitle: string };
  EpisodesScreen: { animeTitle: string };
  EpisodeDetailScreen: { episodeId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AnimeScreen"
        component={AnimeScreen as any}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EpisodesScreen"
        component={EpisodesScreen as any}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EpisodeDetailScreen"
        component={EpisodeDetailScreen as any}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
