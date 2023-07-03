import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";

interface Props {
  data: any;
  isVisible: boolean;
  queryLength: number;
  setQueryLength: any;
}

interface ResultProps {
  id: string;
  title: string;
  coverImage: string;
  setQueryLength?: any;
}

export type StackNavigation = StackNavigationProp<RootStackParamList>;
const Result = ({ id, title, coverImage, setQueryLength }: ResultProps) => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <TouchableOpacity
      onPress={() =>
        setQueryLength(0) ||
        navigation.navigate("AnimeScreen", {
          animeTitle: title,
          animeId: id,
          animeImg: coverImage,
        } as any)
      }
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 100,
          width: 170,
          padding: 5,
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Image
          source={{ uri: coverImage }}
          style={{ width: 50, height: 90, marginRight: 10 }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold" }} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const SearchResult = (props: Props) => {
  //   console.log(props.data);
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => (
        <Result
          id={item.id}
          title={item.title.english}
          coverImage={item.coverImage}
          setQueryLength={props.setQueryLength}
        />
      )}
      style={{
        height: 200,
        width: 170,
        position: "absolute",
        top: 90,
        left: 120,
        zIndex: 1000,
        backgroundColor: "#212427",
        borderRadius: 10,
        display: props.queryLength > 1 ? "flex" : "none",
      }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
      ItemSeparatorComponent={() => (
        <Divider style={{ backgroundColor: "white", width: 170 }} />
      )}
    />
  );
};

export default SearchResult;

const styles = StyleSheet.create({});
