/**
 * The Home Screen
 */

import React, { useState } from "react";
import { View, Text, Picker, Dimensions } from "react-native";
import { Header } from "../../components/Header";
import { textSize, marginMedium } from "../../constants/dimensions/Dimensions";
import { app_name } from "../../constants/data/Data";
import MapView from "react-native-maps";
import DropDownPicker from "react-native-dropdown-picker";

export const Home = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("test");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header title={app_name} />
      <View style={{ width: 220, height: 60 }}>
        <DropDownPicker
          items={[
            { label: "Where To ?", value: "Where To ?", selected: true },
            { label: "UNSW High Street?", value: "UNSW High Street?" },
            {
              label: "Kensington Light rail station ?",
              value: "Kensington Light rail station ?",
            },
            {
              label: "Kingford Light rail station ?",
              value: "Kingford Light rail station ?",
            },
          ]}
          defaultIndex={0}
          containerStyle={{ width: "100%", height: "100%" }}
          value={selectedValue}
          onChangeItem={(item) => navigation.push("TripDetails")}
          placeholder="Select an item"
        />
      </View>
      <View style={{ flex: 1, width: "100%", height: "100%" }}>
        <MapView
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
      </View>
    </View>
  );
};
