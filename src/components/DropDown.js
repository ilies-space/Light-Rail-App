import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

export default class DropDown extends React.Component {
  render() {
    if (this.props.show) {
      const { y: top, x: left } = this.props.position;
      const width = 100;
      return (
        <TouchableWithoutFeedback
          onPress={() => this.props.hide("background pressed")}
        >
          <View style={styles.container}>
            <View style={[styles.menu, { top, left: left - width / 2, width }]}>
              <TouchableOpacity
                style={{ width, alignItems: "center", paddingTop: 5 }}
                onPress={() => this.props.hide("Item 1")}
              >
                <Text>Item 1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width, alignItems: "center", paddingTop: 5 }}
                onPress={() => this.props.hide("Item 2")}
              >
                <Text>Item 2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width, alignItems: "center", paddingTop: 5 }}
                onPress={() => this.props.hide("Item 3")}
              >
                <Text>Item 3</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ width, alignItems: "center", paddingVertical: 5 }}
                onPress={() => this.props.hide("Item 4")}
              >
                <Text>Item 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
