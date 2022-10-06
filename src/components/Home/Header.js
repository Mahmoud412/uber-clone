import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "./NavOptions";

const Header = ({ navigation }) => {
  return (
    <View style={tw`p-5`}>
      <Image
        style={styles.image}
        source={{ uri: "http://links.papareact.com/gzs" }}
      />

      <NavOptions navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});
export default Header;
