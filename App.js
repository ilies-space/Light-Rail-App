import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Rout } from "./src/Rout";

export default function App() {
  return (
    <View style={styles.container}>
      <Rout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
