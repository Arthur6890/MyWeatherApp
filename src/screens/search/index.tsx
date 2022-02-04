import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../src/routes";
import { useNavigation } from "@react-navigation/native";

type searchScreenProp = NativeStackNavigationProp<RootStackParamList, "Search">;

type CityForecastProps = {
  city: string;
  country: string;
};

const Search = () => {
  const [cityInfo, setCityInfo] = useState<CityForecastProps>();
  const [text, setText] = useState("");
  const cityName = "sao paulo";

  useEffect(() => {
    fetch(
      `http://api.geonames.org/postalCodeSearchJSON?placename=${cityName}&username=Arthur6890`
    )
      .then((res) => res.json())
      .then((res) => {
        const cityInfos = res.postalCodes[0];

        const info = {
          city: cityInfos.placeName,
          country: cityInfos.countryCode,
        } as CityForecastProps;
        setCityInfo(info);
      });
  }, []);

  const navigation = useNavigation<searchScreenProp>();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TextInput
          onChangeText={(texto) => setText(texto)}
          placeholder="Digite uma cidade"
          placeholderTextColor={"#ffffff"}
          style={styles.headerText}
        />
      </View>
      <View>
        <View style={styles.mainView}>
          <Text style={styles.city}> {cityInfo?.city} </Text>
          <Text style={styles.country}> {cityInfo?.country} </Text>
          <TouchableOpacity>
            <Text style={styles.add}> ADICIONAR </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ backgroundColor: "aqua", height: 200, width: 200 }}>
        <Text>{text} </Text>
      </View> */}
    </SafeAreaView>
  );
};

export default Search;
