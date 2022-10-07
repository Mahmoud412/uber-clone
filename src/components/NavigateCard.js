import { View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../redux/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={tw`bg-white flex-1`}>
      {/* <Text style={tw`text-center py-3 text-xl`}>Good Morning , oda</Text> */}
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{ key: "AIzaSyBdWXLk2Bg4cuQaA4ywGTL-R0N0S3GlLcQ" }}
            placeholder="Where To"
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
export default NavigateCard;
