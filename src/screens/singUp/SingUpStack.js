import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SingUp } from "./SingUp";
import { Home } from "../home/Home";

export const SingUpStackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <View flex={1}>
      <Stack.Navigator>
        <Stack.Screen
          name="SingUp"
          component={SingUp}
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
      </Stack.Navigator>
    </View>
  );
};
