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
import { EditCard } from "../editCard/EditCard";
import { createStackNavigator } from "@react-navigation/stack";
import { EditPayments } from "../editPayment/EditPayments";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SingUp } from "../singUp/SingUp";

export const MyAccount = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyAcountcontent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditPayments"
        component={EditPayments}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditCard"
        component={EditCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MyAcountcontent = () => {
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
  const navigation = useNavigation();
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
        onPress={() => navigation.push("SingUp")}
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
        onPress={() => navigation.push("EditCard")}
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
        onPress={() => navigation.push("EditPayments")}
      >
        <Text style={{ color: "white", fontSize: textSize }}>
          Edit Payment Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};
