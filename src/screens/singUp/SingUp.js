/**
 * The Help Screen
 */
import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { AntDesign } from "@expo/vector-icons";
import { textSize, marginMedium } from "../../constants/dimensions/Dimensions";
export const SingUp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EFF1F8" }}>
      <Header title={"SingUp"} />
      <View
        flex={1}
        style={{ justifyContent: "center", paddingHorizontal: marginMedium }}
      >
        <TextInputs />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="check" size={20} color={mainColor} />

            <Text style={{ color: mainColor }}>Has at least 8 characters</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <AntDesign name="check" size={20} color={mainColor} />

            <Text style={{ color: mainColor }}>Has at least 1 number</Text>
          </View>
        </View>
      </View>
      <View
        style={{ marginHorizontal: marginMedium, marginVertical: marginMedium }}
      >
        <Text style={{ color: mainColor, textAlign: "center" }}>
          By proccecing , you also agre to the Terms of Service and Privacy
          Policy
        </Text>
      </View>
      <View style={{ paddingHorizontal: marginMedium }}>
        <TouchableOpacity
          style={{
            backgroundColor: mainColor,
            borderRadius: 50,
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: textSize }}>Sing up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ color: mainColor, fontSize: 15 }}>
            Alreay have an acount ? Sing in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TextInputs = () => {
  return (
    <View style={{}}>
      <View
        style={{
          backgroundColor: "white",
          height: 45,
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <TextInput placeholder=" Email*" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 45,
          borderWidth: 1,
          borderColor: "gray",
          marginVertical: 5,
        }}
      >
        <TextInput placeholder=" Choose password*" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 45,
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <TextInput placeholder=" Repeat password*" />
      </View>
    </View>
  );
};
