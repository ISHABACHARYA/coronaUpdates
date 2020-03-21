import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { lightMode } from "../../themes/ThemeActions";
import { bindActionCreators } from "redux";
import { Header } from "../../components";
import Circle from "./components/Circle";
import { HelperFunction, Fonts, Metrics } from "../../helpers";
import { Colors } from "../../themes";
import image from "image";
import { overallData, areaList, areaData } from "./HomeActions";
import moment from "moment";
import SearchModal from "./components/SearchModal";
import Icons from "react-native-vector-icons/Entypo";
import _ from "lodash";

export class HomeScreen extends Component {
  state = {
    searchModalVisible: false,
    searchText: null,
    filterData: [],
    title: "Global"
  };
  componentDidMount() {
    this.props.actions.lightMode();
    this.overallData();
    this.areaList();
  }
  overallData = async () => {
    await this.props.actions.overallData();
  };
  areaList = async () => {
    await this.props.actions.areaList();
    let countryList = _.values(Object.keys(this.props.home.areaList.countries));
    this.setState({ filterData: _.take(countryList, 16) });
  };
  onChangeSearchText = param => {
    const regEx = "\\s*(" + param + ")\\s*";
    const validator = new RegExp(regEx, "i");
    // const validator = new RegExp(`\\s*t\\s*`, 'i')
    let filterData = [];
    let countryList = _.values(Object.keys(this.props.home.areaList.countries));

    countryList.forEach(item => {
      let flag = validator.test(item);
      if (flag) {
        filterData.push(item);
      }
    });
    this.setState({ filterData: _.take(filterData, 16) });
  };

  handleOnSelectArea = async params => {
    let { areaDataError } = this.props.home;
    this.setState({ searchModalVisible: false });
    await this.props.actions.areaData(params);
    if (!areaDataError) this.setState({ title: params });
  };
  handleOnPressLocation = () => {
    if (this.props.home.areaList) {
      this.setState({ searchModalVisible: true });
    }
  };
  resetSearchFilter = () => {
    this.setState({ title: "Global" });
    this.overallData();
  };
  handleOnCloseLocation = () => [this.setState({ searchModalVisible: false })];
  render() {
    const { colors, home } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        {/* <Header title={"Home"} colors={colors} /> */}
        <SearchModal
          value={this.state.searchText}
          visible={this.state.searchModalVisible}
          data={this.state.filterData}
          onChangeText={this.onChangeSearchText}
          onSelectArea={this.handleOnSelectArea}
          onClose={this.handleOnCloseLocation}
        />
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={[styles.searchIconContainer, { alignSelf: "stretch" }]}
            onPress={this.resetSearchFilter}>
            <Text style={styles.title}>{this.state.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.searchIconContainer, { width: 50 }]} onPress={this.handleOnPressLocation}>
            <Icons name={"location"} size={Metrics.icons.small} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentCotainer={[styles.scrollview, { backgroundColor: colors.background }]}
          refreshControl={<RefreshControl refreshing={home.loading} onRefresh={this.overallData} />}>
          <Circle
            radius={HelperFunction.Scale(80)}
            borderColor={Colors.blue}
            number={home.overallData ? home.overallData.confirmedCount : NaN}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, { fontSize: Fonts.size.regular, color: colors.textColor }]}>
              Total Cases
            </Text>
          </View>
          <Circle
            radius={HelperFunction.Scale(60)}
            borderColor={Colors.green}
            number={home.overallData ? home.overallData.curedCount : NaN}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, { fontSize: Fonts.size.regular, color: colors.textColor }]}>Recovered</Text>
          </View>
          <Circle
            radius={HelperFunction.Scale(40)}
            borderColor={Colors.red}
            number={home.overallData ? home.overallData.deadCount : NaN}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, { fontSize: Fonts.size.regular, color: colors.textColor }]}>Deaths</Text>
          </View>
          <ActivityIndicator animating={home.loading} />
        </ScrollView>
        {home.overallData && (
          <View style={styles.timeStampContainer}>
            <Text style={styles.timeStamp}>{`As of ${moment.utc(home.overallData.updateTime).fromNow()}`}</Text>
          </View>
        )}
        {/* <ImageBackground source={image.corona} style={styles.bgImage} /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1
  },
  textStyle: {
    fontFamily: Fonts.base
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Metrics.marginVertical * 2
  },
  bgImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 100,
    width: 100
  },
  timeStampContainer: {
    position: "absolute",
    bottom: 10,
    right: 5
  },
  timeStamp: {
    fontSize: Fonts.size.tiny,
    alignSelf: "flex-end",
    color: Colors.gray
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    alignSelf: "center",
    fontFamily: Fonts.base,
    fontWeight: "bold",
    fontSize: Fonts.size.medium
  },
  searchIconContainer: {
    padding: Metrics.marginHorizontal,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 0.03,
    elevation: 1,
    alignSelf: "flex-end",
    margin: Metrics.marginHorizontal,
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  colors: state.theme.colors,
  home: state.home
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ lightMode, overallData, areaList, areaData }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
