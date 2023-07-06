import Carousel from "react-native-snap-carousel";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/Card/Card";

const SLIDER_WIDTH =
  Dimensions.get("window").width - Dimensions.get("window").width / 2;
const ITEM_WIDTH = 200;

type Props = {
  item: any;
  index: number;
};

function carouselCard({ item, index }: Props) {
  return item !== undefined && item !== null ? (
    <TouchableOpacity onPress={() => {}}>
      <Card
        animeId={item.id}
        animeImg={item.coverImage || item.anime.coverImage}
        animeTitle={
          item.title?.userPreferred ||
          item.anime.title.userPreferred ||
          "No title"
        }
        releaseDate={item.year}
      />
    </TouchableOpacity>
  ) : (
    <View></View>
  );
}

const CarouselComponent = ({ data }: any) => {
  return (
    <Carousel
      data={data}
      renderItem={carouselCard as any}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
    />
  );
};

export default CarouselComponent;
