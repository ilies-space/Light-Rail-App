import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { marginMedium, textSize } from "../../constants/dimensions/Dimensions";
import { FontAwesome } from "@expo/vector-icons";
export const CheckOut = () => {
  return (
    <View flex={1}>
      <Header title={"CheckOut"} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FontAwesome name="train" size={64} color="black" />
      </View>
      <BtnGo />
    </View>
  );
};

const BtnGo = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: mainColor,
        margin: marginMedium,
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: "center",
      }}
      onPress={() => navigation.push("Payment")}
    >
      <Text style={{ color: "white", fontSize: textSize }}>Go</Text>
    </TouchableOpacity>
  );
};
