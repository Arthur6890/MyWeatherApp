import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import Sun from "../../../assets/sun.png";

type props = {
  title: string;
  subtitle: string;
  weather: string;
  temperature: string;
  hide?: boolean;
  icon: string;
  onPress?: () => void;
};

const Card = ({
  hide,
  title,
  subtitle,
  weather,
  temperature,
  icon,
  onPress,
}: props) => {
  const [toogle, setToogle] = useState(false);
  const uri = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <>
      {!hide && (
        <TouchableOpacity style={styles.mainView} onPress={onPress}>
          <View>
            <Text style={styles.city}> {title} </Text>
            <Text style={styles.country}> {subtitle}</Text>
            <Image source={{ uri }} style={styles.icon} resizeMode="contain" />
            <Text style={styles.weather}> {weather} </Text>
          </View>

          <View>
            <Text style={styles.temperature}> {temperature}</Text>
            <TouchableOpacity
              onPress={() => setToogle((favorite) => !favorite)}
            >
              <AntDesign
                style={styles.heart}
                name={toogle ? "heart" : "hearto"}
                size={24}
                color="#ED0952"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
      {hide && (
        <TouchableOpacity style={styles.mainView} onPress={onPress}>
          <View>
            <Text style={styles.city}> {title}</Text>
            <Text style={styles.country}> {subtitle}</Text>
            <Image source={{ uri }} style={styles.icon} resizeMode="contain" />
            <Text style={styles.weather}> {weather}</Text>
          </View>

          <View>
            <Text style={styles.temperature}> {temperature}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Card;
