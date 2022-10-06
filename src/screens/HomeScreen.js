import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Home/Header";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Header navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
