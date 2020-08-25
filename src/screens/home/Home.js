/**
 * The Home Screen
 */

import React from "react";
import { View, Text, Image, Picker, Dimensions } from "react-native";
import { Header } from "../../components/Header";
import { textSize, marginMedium } from "../../constants/dimensions/Dimensions";
import { app_name } from "../../constants/data/Data";
import MapView from "react-native-maps";

export const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header title={app_name} />
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <MapView
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
      </View>

      <View
        style={{
          height: 20,
          top: 65,
          left: 20,
          backgroundColor: "red",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: marginMedium,
          borderColor: "gray",
          borderWidth: 1,
        }}
      >
        <Text style={{ color: "#83B1EB" }}>View larger map</Text>
      </View>

      <View
        style={{
          height: 60,
          backgroundColor: "red",
          position: "absolute",
          top: 100,
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#dcdde1",
          borderRadius: 10,
        }}
      >
        <Picker
          style={{
            height: 40,
            width: "100%",
          }}
          mode={"dropdown"}
        >
          <Picker.Item label="Where To ?" value="0" />
          <Picker.Item label="UNSW High Street?" value="0" />
          <Picker.Item label="Kingford Light rail station ?" value="0" />
          <Picker.Item label="Kensington Light rail station ?" value="0" />
        </Picker>
      </View>
    </View>
  );
};
