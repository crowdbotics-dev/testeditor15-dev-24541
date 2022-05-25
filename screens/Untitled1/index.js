import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      left: 57,
      top: 131,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 22,
      borderRadius: 0,
      color: "#2743ba",
      fontFamily: "Lato",
      opacity: 0.56,
      textAlign: "right"
    }}>Text Color</Text><View style={{
      left: 27,
      top: 23,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View></View>;
};

export default Untitled1;