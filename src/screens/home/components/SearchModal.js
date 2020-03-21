import React from "react";
import { View, Text, FlatList, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Metrics, HelperFunction, Fonts } from "../../../helpers";
import ModalWrapper from "react-native-modal-wrapper";
import Icons from "react-native-vector-icons/Entypo";
import { Colors } from "../../../themes";
import Modal from "react-native-modal";

const SearchModal = ({ data, onChangeText, onSelect, value, visible, onClose, onSelectArea }) => {
  return (
    <ModalWrapper
      visible={visible}
      position={"right"}
      hideModalContentWhileAnimating={true}
      containerStyle={{
        alignSelf: "flex-end"
      }}
      useNativeDriver={true}
      style={styles.sidebar}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0}>
      <View>
        <SafeAreaView>
          <TouchableOpacity onPress={onClose} style={styles.iconContainer}>
            <Icons name={"squared-cross"} size={Metrics.icons.small} />
          </TouchableOpacity>
          <TextInput
            placeholder={"Choose country"}
            value={value}
            onChangeText={onChangeText}
            style={styles.searchInput}
          />
          {data.map((item, index) => (
            <TouchableOpacity style={styles.itemContainer} key={index} onPress={() => onSelectArea(item)}>
              <Text style={styles.itemStyle}>{item}</Text>
            </TouchableOpacity>
          ))}
        </SafeAreaView>
      </View>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: Metrics.screenWidth / 1.5,
    height: Metrics.screenHeight,
    justifyContent: "flex-start",
    paddingHorizontal: Metrics.marginHorizontal,
    flex: 1
  },
  iconContainer: {
    padding: Metrics.paddingHorizontal,
    marginVertical: Metrics.marginVertical
  },
  outsideContainer: {
    flex: 1
  },
  searchInput: {
    height: Metrics.field.height,
    padding: Metrics.marginHorizontal,
    backgroundColor: "#fff",
    borderRadius: Metrics.borderRadius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginTop: Metrics.marginVertical
  },
  itemContainer: {
    paddingVertical: Metrics.marginVertical,
    marginTop: 0.1
  },
  itemStyle: {
    paddingLeft: Metrics.marginVertical,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.base,
    color: Colors.gray
  }
});

export default SearchModal;
