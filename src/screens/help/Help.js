/**
 * The Help Screen
 */
import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { mainColor } from "../../constants/colors/Colors";
export const Help = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"help"} />

      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Ionicons name="ios-help-buoy" size={64} color={mainColor} />
        <Text>Help</Text>
      </View>
    </View>
  );
};
