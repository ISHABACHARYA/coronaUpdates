import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Metrics, HelperFunction, Fonts } from "../../../helpers";
import { Colors } from "../../../themes";
import _ from "lodash";
import moment from "moment";

const Shrimmer = () => {
  console.warn("shirmmer");
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topBar}>
        <View style={styles.profileImageStyle} />
        <View style={styles.titleContainer} />
      </View>

      <View style={styles.descContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    width: "90%",
    height: HelperFunction.Scale(150),
    borderRadius: HelperFunction.Scale(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.03,
    elevation: 1,
    marginTop: Metrics.marginHorizontal * 2,
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "flex-start",
    backgroundColor: Colors.border
  },
  topBar: {
    flexDirection: "row",
    marginBottom: 0.5,
    marginHorizontal: Metrics.marginVertical,
    overflow: "hidden",
    alignItems: "center",
    height: 70
  },
  profileImageStyle: {
    height: HelperFunction.Scale(40),
    width: HelperFunction.Scale(40),
    borderRadius: HelperFunction.Scale(20),
    marginRight: Metrics.marginHorizontal,
    alignSelf: "center",
    backgroundColor: Colors.gray
  },
  titleContainer: {
    backgroundColor: Colors.gray,
    height: 40,
    width: "80%",
    borderRadius: Metrics.borderRadius
  },
  descContainer: {
    height: 60,
    backgroundColor: Colors.gray,
    width: "80%",
    borderRadius: Metrics.borderRadius,
    alignSelf: "center"
  }
});

export default Shrimmer;
