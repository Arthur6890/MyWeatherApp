import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

type props = {
  hide?: boolean;
  title: string | undefined;
  onPress?: () => void;
};
const Header = ({ hide, title, onPress }: props) => {
  return (
    <>
      {hide && (
        <>
          <SafeAreaView style={styles.header}>
            <TouchableOpacity onPress={onPress}>
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title} </Text>
          </SafeAreaView>
        </>
      )}
      {!hide && (
        <SafeAreaView style={styles.header}>
          <Text style={styles.headerText}>Cidades </Text>
          <TouchableOpacity onPress={onPress}>
            <FontAwesome name="search" size={24} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </>
  );
};

export default Header;
