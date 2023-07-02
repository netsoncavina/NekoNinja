import Carousel from "react-native-snap-carousel";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import Card from "../../components/Card/Card";

const SLIDER_WIDTH =
  Dimensions.get("window").width - Dimensions.get("window").width / 2;
const ITEM_WIDTH = 200;

type Props = {
  item: any;
  index: number;
};

function carouselCard({ item, index }: Props) {
  return (
    <Card
      animeId={item.id}
      animeImg={item.coverImage}
      animeTitle={item.title.english}
      releaseDate={item.year}
    />
  );
}

const CarouselComponent = ({ data }: any) => {
  return (
    <Carousel
      data={data}
      renderItem={carouselCard}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      // inactiveSlideShift={0}
      // useScrollView={true}
      // loop={true}
      // autoplay={true}
      // autoplayDelay={500}
      // autoplayInterval={200}
    />
  );
};

export default CarouselComponent;
