import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import HomeScreen from "./src/screens/HomeScreen";
export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
