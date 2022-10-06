import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Header from "../components/Home/Header";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
