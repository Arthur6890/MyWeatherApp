import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Search from "../screens/search";
import CityInfo from "../screens/cityInfo";

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  CityInfo: undefined;
};

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="CityInfo" component={CityInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
