import React from "react";
import { Routes } from "./src/routes";
import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#00AAF2"
        translucent
      />
      <Routes />
    </>
  );
}
