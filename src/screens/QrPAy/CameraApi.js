import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { Feather } from "@expo/vector-icons";

import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { mainColor } from "../../constants/colors/Colors";
export const OpenCamera = ({ navigation }) => {
  // CAMERA API :

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  // CAMERA API :
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingTop: 20, paddingLeft: 20 }}
        >
          <Feather name="arrow-left" size={26} color="white" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Ionicons name="ios-qr-scanner" size={250} color={mainColor} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("QrPayDone")}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              borderColor: "white",
              borderWidth: 2,
            }}
          ></View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Text>DONE</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
