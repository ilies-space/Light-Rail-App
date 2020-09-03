/**
 * The Payment Screen
 */
import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  Picker,
  UIManager,
  findNodeHandle,
} from "react-native";
//dropDown :
//
import { Header } from "../../components/Header";
import { marginMedium, textSize } from "../../constants/dimensions/Dimensions";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { mainColor } from "../../constants/colors/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CheckOut } from "../checkOut/checkOut";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NfcPay } from "../nfcPay/nfPay";
import { Home } from "../home/Home";
import { QrPay } from "../QrPAy/QrPAy";
import { QrPayDone } from "../paymentsDone/QrPayDone";
import { NFCPayDone } from "../paymentsDone/NFCPayDone";
import DropDownPicker from "react-native-dropdown-picker";
export const Payment = () => {
  const [selectedValue, setSelectedValue] = useState("$ 10.0");
  const navigation = useNavigation();

  const AlertMsg = (selectedValue, navigation) => {
    Alert.alert(
      "Top up",
      selectedValue + " Added to physical card balance",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
    navigation.goBack();
  };

  //----
  const CardPay = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: marginMedium,
        }}
        onPress={() => navigation.push("CheckOutNfc")}
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
      </TouchableOpacity>
    );
  };
  //----
  const CardPay2 = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: marginMedium,
        }}
        onPress={() => navigation.push("QrPay")}
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
      </TouchableOpacity>
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
        onPress={() => AlertMsg(selectedValue, navigation)}
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
          {/* <PricePart /> */}

          <View style={{ marginHorizontal: marginMedium }}>
            <View style={{ flexDirection: "row", marginVertical: 25 }}>
              <View style={{ flex: 1 }}>
                <Text>Amount : </Text>
              </View>
              <View style={{ height: 40, width: 120 }}>
                <DropDownPicker
                  items={[
                    { label: "$ 10.0", value: "$ 10.0" },
                    {
                      label: "$ 20.0",
                      value: "$ 20.0",
                    },
                    {
                      label: "$ 30.0",
                      value: "$ 30.0",
                    },
                  ]}
                  value={selectedValue}
                  defaultIndex={0}
                  containerStyle={{ width: "100%", height: "100%" }}
                  // value={selectedValue}
                  onChangeItem={(item) => setSelectedValue(item.value)}
                  placeholder="$ 10.0"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text>subTotal : </Text>
              </View>
              <Text>{selectedValue}</Text>
            </View>
          </View>
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
        name="CheckOutNfc"
        component={NfcPay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QrPay"
        component={QrPay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QrPayDone"
        component={QrPayDone}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NFCPayDone"
        component={NFCPayDone}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
