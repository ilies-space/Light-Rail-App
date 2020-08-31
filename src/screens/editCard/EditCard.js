/**
 * The Help Screen
 */
import React from "react";
import { View, Text, Alert } from "react-native";
import { Header } from "../../components/Header";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { AntDesign } from "@expo/vector-icons";
import { textSize, marginMedium } from "../../constants/dimensions/Dimensions";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
export const EditCard = () => {
  const naviagtion = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#EFF1F8" }}>
      <View
        style={{
          paddingTop: 36,
          backgroundColor: mainColor,
          paddingHorizontal: marginMedium,
          paddingVertical: 10,
        }}
      >
        <View flexDirection={"row"}>
          <TouchableOpacity onPress={() => naviagtion.goBack()}>
            <Text style={{ color: "white", fontSize: textSize }}>Cancel</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: textSize,
              flex: 1,
              textAlign: "center",
            }}
          >
            Add Opal/physical card
          </Text>
          <TouchableOpacity onPress={() => AlertDone(naviagtion)}>
            <Text style={{ color: "white", fontSize: textSize }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View flex={1} style={{ paddingTop: marginMedium }}>
        <TextInputs />
        <View
          style={{ flexDirection: "row", justifyContent: "space-around" }}
        ></View>
      </View>
      <View
        style={{ marginHorizontal: marginMedium, marginVertical: marginMedium }}
      ></View>
    </View>
  );
};

const AlertDone = (naviagtion) =>
  Alert.alert(
    "save",
    "information has been saved successfully",
    [
      {
        text: "close",
        style: "cancel",
        onPress: () => naviagtion.goBack(),
      },
    ],
    { cancelable: false }
  );

const TextInputs = () => {
  return (
    <View style={{}}>
      <View
        style={{
          backgroundColor: "white",
          height: 45,
          borderWidth: 1,
          borderColor: "gray",
          marginHorizontal: marginMedium,
        }}
      >
        <TextInput placeholder="Card type" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 45,
          borderWidth: 1,
          borderColor: "gray",
          marginVertical: 5,
          marginHorizontal: marginMedium,
        }}
      >
        <TextInput placeholder=" Card Number" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: 45,
          borderWidth: 1,
          borderColor: "gray",
          marginHorizontal: marginMedium,
        }}
      >
        <TextInput placeholder="PIN" />
      </View>
    </View>
  );
};
