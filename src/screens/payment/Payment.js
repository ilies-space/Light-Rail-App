/**
 * The Payment Screen
 */
import React from "react";
import { View, Text, Alert, Picker } from "react-native";
import { Header } from "../../components/Header";
import { marginMedium, textSize } from "../../constants/dimensions/Dimensions";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CheckOut } from "../checkOut/checkOut";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
export const Payment = () => {
  const AlertMsg = () =>
    Alert.alert(
      "Top up",
      "Added to physical card balance",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  //----
  const CardPay = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: marginMedium,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 250,
            width: 250,
            backgroundColor: mainColor,
            borderRadius: 10,
          }}
        >
          <MaterialCommunityIcons name="nfc" size={64} color="white" />
          <Text style={{ color: "white", fontSize: textSize }}>
            Click to pay via NFC
          </Text>
        </View>
        <Text style={{ color: "gray", fontSize: textSize, marginTop: 10 }}>
          Physical Card
        </Text>
      </View>
    );
  };
  //----
  const CardPay2 = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: marginMedium,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 250,
            width: 250,
            backgroundColor: mainColor,
            borderRadius: 10,
          }}
        >
          <MaterialCommunityIcons name="qrcode-scan" size={64} color="white" />
          <Text style={{ color: "white", fontSize: textSize }}>
            Click to scan QR code
          </Text>
        </View>
        <Text style={{ color: "gray", fontSize: textSize, marginTop: 10 }}>
          Virtual Card
        </Text>
      </View>
    );
  };
  //----
  const PricePart = () => {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              margin: marginMedium,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              paddingBottom: marginMedium,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: "gray", fontSize: textSize, marginTop: 10 }}
              >
                Amount
              </Text>
            </View>
            <View
              style={{
                borderColor: "gray",
                borderWidth: 1,
                paddingHorizontal: marginMedium,
              }}
            >
              <Picker style={{ height: 40, width: 150 }} mode={"dropdown"}>
                <Picker.Item label="$ 10.0" value="10" />
                <Picker.Item label="$ 20.0" value="20" />
                <Picker.Item label="$ 30.0" value="30" />
              </Picker>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              margin: marginMedium,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              paddingBottom: marginMedium,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: "gray", fontSize: textSize, marginTop: 10 }}
              >
                SubTotal
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: marginMedium,
              }}
            >
              <Text
                style={{ color: "gray", fontSize: textSize, marginTop: 10 }}
              >
                Final price
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  //----
  const TopUpButton = () => {
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
        onPress={() => navigation.push("CheckOut")}
      >
        <Text style={{ color: "white", fontSize: textSize }}>Top Up</Text>
      </TouchableOpacity>
    );
  };

  const PaymentContent = () => {
    return (
      <View style={{ flex: 1 }}>
        <Header title={"Payment Method"} />
        <View flex={2}>
          <ScrollView horizontal={true}>
            <CardPay />
            <CardPay2 />
          </ScrollView>
        </View>
        <View flex={1}>
          <PricePart />
        </View>
        <TopUpButton />
      </View>
    );
  };
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PaymentContent"
        component={PaymentContent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
