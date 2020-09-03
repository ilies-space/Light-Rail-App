/**
 * The TripPlanner Screen
 */
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Header } from "../../components/Header";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { marginMedium, textSize } from "../../constants/dimensions/Dimensions";
import { FontAwesome } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
export const TripPlanner = ({ route, to }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Trip Planner"} />

      <View flex={1}>
        <MapView
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
      </View>
      <View flex={0.7}>
        <Cards route={route} />
      </View>
      <View
        style={{
          height: 35,
          top: 80,
          position: "absolute",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            marginHorizontal: 30,
            height: 35,
            borderRadius: 5,
          }}
        >
          <TextInput placeholder={"Search"} style={{ textAlign: "center" }} />
        </View>
      </View>
    </View>
  );
};

const Cards = ({ route }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: marginMedium,
          marginTop: marginMedium,
          borderRadius: 5,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: mainColor,
              height: 60,
              width: 60,
              marginRight: marginMedium,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="train" size={24} color="white" />
          </View>
          <View>
            <Text style={{ color: mainColor, fontSize: textSize }}>
              Work Trip
            </Text>
            <Text>from: {route.params?.from}</Text>
            <Text>to: {route.params?.to}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
