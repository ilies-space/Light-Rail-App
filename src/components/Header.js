import React from "react";
import { View, Text } from "react-native";
import { mainColor } from "../constants/colors/Colors";
import { app_name } from "../constants/data/Data";
import { headerSize, textSize } from "../constants/dimensions/Dimensions";
import { TouchableOpacity } from "react-native-gesture-handler";
//icon
import { Entypo } from "@expo/vector-icons"; //
import { iconSize, marginMedium } from "../constants/dimensions/Dimensions";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: mainColor,
        width: "100%",
        height: headerSize,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: marginMedium,
        paddingTop: marginMedium,
      }}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={iconSize} color="white" />
      </TouchableOpacity>
      <View
        style={{ flex: 1, alignItems: "center", marginRight: marginMedium }}
      >
        <Text
          style={{
            fontSize: textSize,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};
