import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Button, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../redux/navSlice";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image: "http://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "222",
    title: "Order food",
    image: "http://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = ({ navigation }) => {
  const origin = useSelector(selectOrigin);
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}
          >
            <View style={tw`${!origin && "opacity-20"}`}>
              <Image style={styles.imgae} source={{ uri: item.image }} />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgae: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
export default NavOptions;
