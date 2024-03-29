const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import IPhone1313Pro3 from "./screens/IPhone1313Pro3";
import IPhone1313Pro1 from "./screens/IPhone1313Pro1";
import IPhone1313Pro2 from "./screens/IPhone1313Pro2";
import IPhone1313Pro4 from "./screens/IPhone1313Pro4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone1313Pro3"
              component={IPhone1313Pro3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro1"
              component={IPhone1313Pro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro2"
              component={IPhone1313Pro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro4"
              component={IPhone1313Pro4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
