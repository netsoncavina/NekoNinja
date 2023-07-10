import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import { useNavigation } from "@react-navigation/native";

interface Props {
  pages: string[];
}

export type StackNavigation = StackNavigationProp<RootStackParamList>;
const Breadcrumb = ({ pages }: Props) => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <View style={{ marginBottom: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home" size={24} color="white" />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "sans-serif-medium",
              paddingLeft: 5,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>

        {pages.map((page, index) =>
          index === pages.length ? (
            <Text
              key={index}
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: "sans-serif-medium",
                paddingLeft: 5,
              }}
            >
              {page}
            </Text>
          ) : (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo name="chevron-right" size={24} color="white" />
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontFamily: "sans-serif-medium",
                  paddingLeft: 5,
                  width: 200,
                }}
                numberOfLines={1}
              >
                {page}
              </Text>
            </View>
          )
        )}
      </View>
    </View>
  );
};

export default Breadcrumb;

const styles = StyleSheet.create({});
