/**
 * The Main router
 */

import React from "react";
import { View } from "react-native";
import { DrawerNavigation } from "./navigation/drawerNavigation";
import { NavigationContainer } from "@react-navigation/native";

export const Rout = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </View>
  );
};
