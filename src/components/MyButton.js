import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={{ color: "white" }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#336699",
    padding: 10,
    borderRadius: 5,
  },
});
