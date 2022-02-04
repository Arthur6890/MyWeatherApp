import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../src/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../components/header/index";
import Card from "../../components/card";

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type CityInfoProps = {
  title: string;
  temperature: string;
  country: string;
  weather: string;
  icon: string;
};
const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  const API_KEY = "f0b4de8338b962d7031dd16e79cbc4d6";

  let cityName = "tokyo";

  const [cityInfo, setCityInfo] = useState<CityInfoProps>();

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt_br`
    )
      .then((res) => res.json())
      .then((res) => {
        const firstWeather = res.weather[0];

        const info = {
          title: res.name,
          temperature: res.main.temp,
          country: res.sys.country,
          weather: firstWeather.description,
          icon: firstWeather.icon,
        } as CityInfoProps;
        setCityInfo(info);
      });
  }, []);

  const weatherFormat = `${cityInfo?.weather
    .charAt(0)
    .toUpperCase()}${cityInfo?.weather.slice(1)}`;
  // const temperatureFormat = cityInfo?.temperature.split(".")[0];
  // const minTempFormat = cityInfo?.min_temp.split(".")[0];
  // const maxTempFormat = cityInfo?.max_temp.split(".")[0];

  // por alguma razão ao tentar formatar as temperaturas com split, eu recebo um erro de "TypeError: temperatureFormat.split is not a function. (In 'temperatureFormat.split(".")', 'temperatureFormat.split' is undefined)"
  const format = {
    weather: weatherFormat,
    // temperature: `${temperatureFormat}°`,
    // minTempFormat: `${minTempFormat}°`,
    // maxTempFormat: `${maxTempFormat}°`,
  };

  return (
    <SafeAreaView style={styles.background}>
      <Header title="Cidades" onPress={() => navigation.navigate("Search")} />
      <ScrollView>
        {cityInfo != undefined && (
          <Card
            title={cityInfo?.title}
            subtitle={cityInfo.country}
            weather={format.weather}
            icon={cityInfo.icon}
            temperature={`${cityInfo.temperature}°`}
            onPress={() => navigation.navigate("CityInfo")}
          />
        )}
        {cityInfo === undefined && <Text>Teste</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
