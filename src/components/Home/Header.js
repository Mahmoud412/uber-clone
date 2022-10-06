import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "./NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const Header = ({ navigation }) => {
  return (
    <View style={tw`p-5`}>
      <Image
        style={styles.image}
        source={{ uri: "http://links.papareact.com/gzs" }}
      />
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBdWXLk2Bg4cuQaA4ywGTL-R0N0S3GlLcQ" }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder="Where From"
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
