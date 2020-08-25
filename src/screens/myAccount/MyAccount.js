/**
 * The MyAccount Screen
 */
import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { textSize } from "../../constants/dimensions/Dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
export const MyAccount = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EFF1F8" }}>
      <Header title={"Profile"} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: mainColor, fontSize: textSize }}>
            User name
          </Text>

          <View
            style={{
              backgroundColor: mainColor,
              padding: 30,
              marginTop: 50,
              borderRadius: 100,
            }}
          >
            <FontAwesome5 name="user-alt" size={65} color="white" />
          </View>
        </View>
      </View>
      <Buttons />
    </View>
  );
};

const Buttons = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <TouchableOpacity
        style={{
          backgroundColor: mainColor,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: textSize }}>
          Edit Personal Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: mainColor,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: textSize }}>
          Edit Card Details
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: mainColor,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: textSize }}>
          Edit Payment Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};
