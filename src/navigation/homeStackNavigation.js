import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home/Home";
import { TripDetails } from "../screens/tripdetails/tripDetails";
import { Payment } from "../screens/payment/Payment";
import { TripPlanner } from "../screens/tripPlanner/TripPlanner";

export const HomeStackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <View flex={1}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TripPlanner"
          component={TripPlanner}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
