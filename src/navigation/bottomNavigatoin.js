/**
 * The BottomNavigatoin Screen
 */
import React from "react";
import { Home } from "../screens/home/Home";
import { Payment } from "../screens/payment/Payment";
import { History } from "../screens/history/History";
import { Help } from "../screens/help/Help";
//
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { mainColor } from "../constants/colors/Colors";
export const BottomNavigatoin = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      tabBarOptions={{
        style: {
          backgroundColor: mainColor,
        },
        activeTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dollar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="restart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="help-with-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
