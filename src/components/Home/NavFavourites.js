import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    icon: "home",
    location: "home",
    destination: "Code Street , London , Uk",
  },
  {
    id: "1234",
    icon: "briefcase",
    location: "work",
    destination: "London Eye , london , Uk",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-6 `}>
          <Icon
            size={18}
            name={icon}
            color="white"
            type="ionicon"
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          />

          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
