import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "./NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../redux/navSlice";

const Header = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <View style={tw`p-5`}>
      <Image
        style={styles.image}
        source={{ uri: "http://links.papareact.com/gzs" }}
      />
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        query={{ key: "AIzaSyBdWXLk2Bg4cuQaA4ywGTL-R0N0S3GlLcQ" }}
        placeholder="Where From"
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        styles={{
          textInput: {
            fontWeight: "700",
            fontSize: 18,
            marginTop: 7,
          },
          container: {
            flex: 0,
          },
        }}
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
