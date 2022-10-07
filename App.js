import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import EatsScreen from "./src/screens/EatsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}
