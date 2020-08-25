/**
 * The History Screen
 */
import React from "react";
import { View, Text } from "react-native";
import { mainColor } from "../../constants/colors/Colors";
//icon
import { FontAwesome } from "@expo/vector-icons";
import {
  marginMedium,
  textSizemin,
} from "../../constants/dimensions/Dimensions";
import { Header } from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
export const History = () => {
  //--------------
  const HistoryCard = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: marginMedium,
          marginVertical: marginMedium,
          borderTopWidth: 1,
          borderColor: "gray",
        }}
      >
        <View style={{}}>
          <Text style={{ color: mainColor, fontSize: textSizemin }}>
            9:00 AM
          </Text>
        </View>

        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: mainColor,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            marginHorizontal: marginMedium,
          }}
        >
          <FontAwesome name="train" size={30} color="white" />
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: mainColor, fontSize: textSizemin }}>
              from :
            </Text>
            <Text style={{ color: mainColor, fontSize: textSizemin }}>
              Place X
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: mainColor, fontSize: textSizemin }}>
              To :
            </Text>
            <Text style={{ color: mainColor, fontSize: textSizemin }}>
              Place Y
            </Text>
          </View>
        </View>
      </View>
    );
  };
  //--------------
  const HistoryDate = () => {
    return (
      <View style={{ backgroundColor: mainColor, paddingLeft: marginMedium }}>
        <Text
          style={{
            color: "white",
            fontSize: textSizemin,
            paddingVertical: marginMedium,
          }}
        >
          Today - Thu Oct 13
        </Text>
      </View>
    );
  };
  //--------------
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header title={"History"} />
        <HistoryDate />
        <View style={{ flex: 1 }}>
          <HistoryCard />
          <HistoryCard />
          <HistoryDate />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
          <HistoryDate />
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </View>
      </ScrollView>
    </View>
  );
};
