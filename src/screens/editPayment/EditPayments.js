/**
 * The Help Screen
 */
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { AntDesign } from "@expo/vector-icons";
import { textSize, marginMedium } from "../../constants/dimensions/Dimensions";
import { useNavigation } from "@react-navigation/native";
export const EditPayments = () => {
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
            Edit Payment Details
          </Text>
          <TouchableOpacity onPress={() => naviagtion.goBack()}>
            <Text style={{ color: "white", fontSize: textSize }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        flex={1}
        style={{ paddingTop: marginMedium, marginHorizontal: marginMedium }}
      >
        <TextInputs />
        <View
          style={{ flexDirection: "row", justifyContent: "space-around" }}
        ></View>
      </View>
      <View
        style={{ marginHorizontal: marginMedium, marginVertical: marginMedium }}
      ></View>
      <View style={{ flex: 0.5, backgroundColor: mainColor }}>
        <View
          style={{
            backgroundColor: "white",
            height: 40,
            marginHorizontal: 100,
            marginTop: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="cc-apple-pay" size={32} color="black" />
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 40,
            marginHorizontal: 100,
            marginTop: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="cc-apple-pay" size={32} color="black" />
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 40,
            marginHorizontal: 100,
            marginTop: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="cc-paypal" size={32} color="black" />
        </View>
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
        <TextInput placeholder=" Card Number" />
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
        <TextInput placeholder=" Name on Card" />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "white",
            height: 45,
            borderWidth: 1,
            borderColor: "gray",
            flex: 0.6,
          }}
        >
          <TextInput placeholder=" Expiry Data Data" />
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 45,
            borderWidth: 1,
            borderColor: "gray",
            flex: 0.4,
          }}
        >
          <TextInput placeholder=" CVV" />
        </View>
      </View>
      <View style={{ margin: marginMedium }}>
        <Text style={{ textAlign: "center", color: mainColor }}>
          You CVV is the last 3 digits in the signature strip on the back of
          your card
        </Text>
      </View>
    </View>
  );
};
