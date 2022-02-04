import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../src/routes";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/header";
import Card from "../../components/card";

type cityInfoScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "CityInfo"
>;

type CityForecastProps = {
  city: string;
  day: string;
  temperature: string;
  weather: string;
  icon: string;
  max_temp: string;
  min_temp: string;
};

const CityInfo = () => {
  const navigation = useNavigation<cityInfoScreenProp>();

  const API_KEY = "b1b15e88fa797225412429c1c50c122a1";

  let cityName = "tokyo";

  const [cityInfo, setCityInfo] = useState<CityForecastProps>();

  useEffect(() => {
    fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${API_KEY}&lang=pt_br&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        const firstWeather = res.list[0];

        const info = {
          city: res.city.name,
          day: firstWeather.dt_txt,
          temperature: firstWeather.main.temp,
          weather: firstWeather.weather[0].description,
          max_temp: firstWeather.main.temp_max,
          min_temp: firstWeather.main.temp_min,
          icon: firstWeather.weather[0].icon,
        } as CityForecastProps;
        setCityInfo(info);
      });
  }, []);

  const dateFormatDay = cityInfo?.day.split(" ")[0].split("-")[1];
  const dateFormatMonth = cityInfo?.day.split(" ")[0].split("-")[2];
  const weatherFormat = `${cityInfo?.weather
    .charAt(0)
    .toUpperCase()}${cityInfo?.weather.slice(1)}`;
  // const temperatureFormat = cityInfo?.temperature.split(".")[0];
  // const minTempFormat = cityInfo?.min_temp.split(".")[0];
  // const maxTempFormat = cityInfo?.max_temp.split(".")[0];

  // por alguma razão ao tentar formatar as temperaturas com split, eu recebo um erro de "TypeError: temperatureFormat.split is not a function. (In 'temperatureFormat.split(".")', 'temperatureFormat.split' is undefined)"
  const format = {
    date: `${dateFormatDay}/${dateFormatMonth}`,
    weather: weatherFormat,
    // temperature: `${temperatureFormat}°`,
    // minTempFormat: `${minTempFormat}°`,
    // maxTempFormat: `${maxTempFormat}°`,
  };

  return (
    <SafeAreaView>
      <Header title={cityInfo?.city} onPress={navigation.goBack} hide />
      <ScrollView>
        {cityInfo != undefined && (
          <Card
            title={format.date}
            subtitle={`min: ${cityInfo.min_temp}° max: ${cityInfo.max_temp}°`}
            icon={cityInfo.icon}
            weather={format.weather}
            temperature={`${cityInfo.temperature}°`}
            hide
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CityInfo;
