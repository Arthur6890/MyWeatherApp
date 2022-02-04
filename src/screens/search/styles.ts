import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#00AAF2",
    paddingBottom: 20,
    paddingHorizontal: 20,
    height: 80,
  },
  headerText: {
    // fontWeight: "bold",
    fontSize: 12,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
    letterSpacing: 1,
    marginLeft: 15,
    width: "40%",
  },
  mainView: {
    backgroundColor: "#FFFFFF",
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
    fontSize: 22,
    color: "#000000",
  },
  country: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#000000",
    marginTop: 1.5,
    marginBottom: 26,
  },
  add: {
    marginLeft: 12,
    color: "#2189C6",
  },
});
