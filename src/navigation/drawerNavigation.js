import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomNavigatoin } from "./bottomNavigatoin";
import { MyAccount } from "../screens/myAccount/MyAccount";
import { TripPlanner } from "../screens/tripPlanner/TripPlanner";
import { Faqs } from "../screens/faqs/Faqs";
import { Help } from "../screens/help/Help";
import { mainColor } from "../constants/colors/Colors";
import { SingUpStackNavigation } from "../screens/singUp/SingUpStack";
export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: "white",
        backgroundColor: mainColor,
        inactiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Home" component={BottomNavigatoin} />
      <Drawer.Screen name="TripPlanner" component={TripPlanner} />
      <Drawer.Screen name="MyAccount" component={MyAccount} />
      <Drawer.Screen name="Faqs" component={Faqs} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen
        name="SingUpStackNavigation"
        component={SingUpStackNavigation}
        options={{
          headerShown: false,
          title: "sing out",
        }}
      />
    </Drawer.Navigator>
  );
};
