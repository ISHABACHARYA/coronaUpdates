import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Metrics, HelperFunction, Fonts } from "../../../helpers";
import { Colors } from "../../../themes";
import _ from "lodash";
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialIcons";
const NewsCard = ({
  author,
  source,
  title,
  description,
  url,
  urlToImage,
  content,
  publishedAt,
  colors,
  handleClickLink
}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topBar}>
        {urlToImage ? (
          <Image source={{ uri: urlToImage }} style={styles.profileImageStyle} />
        ) : (
          <Icon name={"person-pin"} size={HelperFunction.Scale(40)} style={styles.profileImageStyle} />
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.author}>{`${source.name}`}</Text>
          <Text style={styles.title}>{_.truncate(title, { length: 100 })}</Text>
        </View>
      </View>
      <Text style={styles.author}>{`${author}  |  ${moment(publishedAt).fromNow()}`}</Text>

      <View style={styles.descContainer}>
        <Text style={styles.desc}>{description}</Text>
        <TouchableOpacity onPress={() => handleClickLink(url)}>
          <Text style={styles.source}>{url}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    width: "80%",
    padding: Metrics.marginVertical,
    backgroundColor: "#fff",
    borderRadius: HelperFunction.Scale(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 0.03,
    elevation: 1,
    marginTop: Metrics.marginHorizontal * 2
  },
  topBar: {
    flexDirection: "row",
    marginBottom: 0.5,
    marginHorizontal: Metrics.marginVertical,
    overflow: "hidden",
    alignItems: "center"
  },
  profileImageStyle: {
    height: HelperFunction.Scale(40),
    width: HelperFunction.Scale(40),
    borderRadius: HelperFunction.Scale(20),
    marginRight: Metrics.marginHorizontal,
    alignSelf: "flex-start"
  },
  titleContainer: {},
  title: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.bold,
    color: Colors.grayDark
  },
  author: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.base,
    color: Colors.gray
  },
  source: {
    fontSize: Fonts.size.tiny,
    color: Colors.blue
  }
});

export default NewsCard;
