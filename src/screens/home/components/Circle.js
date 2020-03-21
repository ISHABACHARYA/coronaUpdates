import React from "react";
import { View, Text } from "react-native";
import { Fonts, Metrics } from "../../../helpers";
import { Colors } from "../../../themes";
import numeral from "numeral";
import AnimateNumber from "react-native-countup";

const Circle = ({ radius, borderColor, number, colors, subTitle }) => {
  return (
    <View
      style={{
        height: radius * 2,
        width: radius * 2,
        borderRadius: radius,
        borderWidth: 0.5,
        borderColor: borderColor,
        backgroundColor: "transparent",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: Metrics.marginHorizontal
      }}>
      <Text style={{ fontSize: radius / 2.5, color: borderColor }}>
        <AnimateNumber
          timing="easeOut"
          value={number}
          formatter={val => {
            return numeral(val).format("0,0");
          }}
        />
      </Text>
    </View>
  );
};

export default Circle;
