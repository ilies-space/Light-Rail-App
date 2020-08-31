import React from "react";
import { View, Text, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { marginMedium, textSize } from "../../constants/dimensions/Dimensions";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const QrPayDone = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: mainColor }}>
      <View style={{ backgroundColor: mainColor, paddingVertical: 18 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                fontSize: textSize,
                color: "white",
                fontWeight: "bold",
              }}
            >
              see you later onboard
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FontAwesome name="check-circle" size={90} color="black" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1.5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginHorizontal: 20,
        }}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>virtual card</Text>
          <Text>Click Go and Tap off</Text>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="qrcode" size={40} color={mainColor} />
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 22, color: mainColor }}>Balance</Text>
              <Text>$ 20.0</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              borderBottomWidth: 0.5,
              borderColor: "gray",
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontWeight: "bold",
                fontSize: 18,
                color: mainColor,
              }}
            >
              Work Trip
            </Text>
            <Text>$ 13</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              borderBottomWidth: 0.5,
              borderColor: "gray",
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontWeight: "bold",
                fontSize: 18,
                color: mainColor,
              }}
            >
              Balance Remaining
            </Text>
            <Text>$ 7.0</Text>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "flex-end", backgroundColor: "white" }}>
        <BtnGo />
      </View>
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
        paddingVertical: 8,
        borderRadius: 10,
        alignItems: "center",
      }}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={{ color: "white", fontSize: textSize }}>HOME</Text>
    </TouchableOpacity>
  );
};
