/**
 * The TripDetails Screen when chosing distination :
 */
import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { mainColor } from "../../constants/colors/Colors";
import { marginMedium, textSize } from "../../constants/dimensions/Dimensions";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import MapView from "react-native-maps";

export const TripDetails = ({ navigation }) => {
  const trame = <FontAwesome5 name="train" size={24} color={mainColor} />;
  const people = <Ionicons name="md-people" size={24} color={mainColor} />;
  const time = (
    <MaterialCommunityIcons name="timer-sand" size={24} color={mainColor} />
  );

  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const Header = () => {
    return (
      <View
        style={{
          backgroundColor: mainColor,
          paddingVertical: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: textSize,
          }}
        >
          Trip information
        </Text>
      </View>
    );
  };

  const CardTemplate = ({ details, title, icon }) => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: marginMedium,
            paddingTop: marginMedium,
          }}
        >
          <View flex={1}>
            <Text
              style={{
                marginHorizontal: marginMedium,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {title} :
            </Text>
          </View>
          <Text
            style={{
              marginHorizontal: marginMedium,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {details}
          </Text>
          {icon}
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: mainColor, paddingTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: marginMedium,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ marginRight: marginMedium }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <FontAwesome name="circle" size={24} color="white" />
          <View
            style={{
              flex: 1,
              borderColor: "white",
              borderWidth: 1,
              backgroundColor: "#959AAD",
              padding: 5,
              marginHorizontal: marginMedium,
              borderRadius: 5,
            }}
          >
            <TextInput
              placeholder={"UNSW High Street"}
              onChangeText={(value) => setfrom(value)}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.push("TripPlanner", {
                from: from,
                to: to,
              })
            }
          >
            <FontAwesome name="star-o" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: mainColor,
          paddingTop: marginMedium,
          paddingBottom: marginMedium,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: marginMedium,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 25,
          }}
        >
          <Entypo name="circle" size={24} color="white" />
          <View
            style={{
              flex: 1,
              borderColor: "white",
              borderWidth: 1,
              backgroundColor: "#959AAD",
              padding: 5,
              marginHorizontal: marginMedium,
              borderRadius: 5,
            }}
          >
            <TextInput
              placeholder={"UNSW High Street"}
              onChangeText={(value) => setto(value)}
            />
          </View>
          <Fontisto name="close" size={24} color="white" />
        </View>
      </View>
      <View flex={1}>
        <MapView
          style={{
            width: Dimensions.get("window").width,
            height: "100%",
          }}
        />
      </View>
      <Header />
      <CardTemplate title={"Live Capacity"} details={20} icon={trame} />
      <CardTemplate title={"Availible Seats"} details={20} icon={people} />
      <CardTemplate title={"Departure Time"} details={20} icon={time} />
      <CardTemplate title={"Arrival Time"} details={20} icon={time} />
      <Payment />
    </View>
  );
};

const Payment = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: mainColor,
        margin: 5,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
      onPress={() => navigation.navigate("Payment")}
    >
      <Text
        style={{ color: "white", fontSize: textSize, marginHorizontal: 20 }}
      >
        Payment
      </Text>
      <Ionicons name="md-arrow-forward" size={24} color="white" />
    </TouchableOpacity>
  );
};
import { useNavigation } from "@react-navigation/native";
