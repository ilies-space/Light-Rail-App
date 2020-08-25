/**
 * The Faqs Screen
 */
import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";

export const Faqs = () => {
  return (
    <View flex={1}>
      <Header title={"FAQS"} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Faqs</Text>
      </View>
    </View>
  );
};
