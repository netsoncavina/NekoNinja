import React, { Dispatch, SetStateAction } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  openMenu: () => void;
  closeMenu: () => void;
}

const Settings = ({ visible, setVisible, openMenu, closeMenu }: Props) => {
  return (
    <TouchableOpacity onPress={openMenu}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Image
              source={require("../../assets/settings.png")}
              style={{ width: 30, height: 30 }}
            />
          }
          style={{ marginTop: 30 }}
        >
          <Menu.Item onPress={() => {}} title="Configurações" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Sobre" />
          {/* <Menu.Item onPress={() => {}} title="Item 3" /> */}
        </Menu>
      </View>
    </TouchableOpacity>
  );
};

export default Settings;
