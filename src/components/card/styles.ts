import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    // height: " 100%",
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 4,
    shadowColor: "#000000",
    borderRadius: 6,
    justifyContent: "space-between",
    padding: 16,
  },
  city: {
    fontFamily: "Roboto_400Regular",
    fontSize: 18,
    color: "#000000",
  },
  country: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#000000",
    marginTop: 1.5,
  },
  weather: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#f28200",
    marginTop: 10,
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: 15,
  },
  temperature: {
    fontFamily: "Roboto_400Regular",
    fontSize: 25,
    color: "#f28200",
    marginTop: 6,
  },
  heart: {
    marginLeft: 16,
    marginTop: 17,
  },
});
