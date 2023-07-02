import React from "react";
import { View, Text, Image } from "react-native";
import { Appbar, Button } from "react-native-paper";
import Search from "./Search";
import Settings from "./Settings";

interface Props {
  showTopbar: boolean;
}

const Topbar = (props: Props) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Appbar.Header
      style={{
        backgroundColor: "#212427",
        justifyContent: "space-between",
        // marginLeft: 10,
        // marginRight: 10,
        height: 70,
        display: props.showTopbar ? "flex" : "none",
        borderBottomWidth: 1,
      }}
    >
      <Image
        source={require("../../assets/neko-ninja.png")}
        style={{ width: 50, height: 50, marginLeft: 10 }}
      />
      <Search />
      <Settings
        visible={visible}
        setVisible={setVisible}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
    </Appbar.Header>
  );
};

export default Topbar;
