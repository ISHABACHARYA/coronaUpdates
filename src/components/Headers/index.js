import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = ({ title, colors }) => {
  return (
    <View style={[styles.rootContainer, { backgroundColor: colors.header }]}>
      <Text style={[styles.headerText, { color: colors.headerText }]}>{title ? title : "Supply title"}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "ios" ? 80 : 50
  },
  headerText: {
    fontFamily: "Arial",
    fontWeight: "bold",
    marginTop: Platform.OS === "ios" ? 40 : 10
  }
});

export { Header };
