import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList, Linking, Alert, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { topHeadlines } from "./NewsActions";
import { bindActionCreators } from "redux";
import { Fonts, Metrics } from "../../helpers";
import { Colors } from "../../themes";
import NewsCard from "./components/NewsCard";
import Shrimmer from "./components/Shrimmer";

class NewsScreen extends Component {
  componentDidMount() {
    this.topHeadlines();
  }
  topHeadlines = async () => {
    await this.props.actions.topHeadlines();
  };
  handleClickLink = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
        Alert.alert("Could open the link");
      }
    });
  };
  render() {
    const { loading, topNews, topNewsError } = this.props.news;
    const { colors } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        {loading && <ActivityIndicator visible={loading} />}
        <View>
          <Text style={styles.headline}> Top Headlines </Text>
        </View>

        {topNews ? (
          <FlatList
            data={topNews}
            renderItem={({ item }) => (
              <NewsCard
                author={item.author}
                source={item.source}
                title={item.title}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
                content={item.content}
                publishedAt={item.publishedAt}
                colors={colors}
                handleClickLink={this.handleClickLink}
              />
            )}
            contentContainerStyle={styles.flatlistContainer}
            onRefresh={() => this.topHeadlines()}
            refreshing={loading}
          />
        ) : (
          <Shrimmer />
        )}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  headline: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.base,
    padding: Metrics.marginVertical,
    color: Colors.gray
  },
  flatlistContainer: {
    alignItems: "center"
  }
});

const mapStateToProps = state => ({
  news: state.news,
  colors: state.theme.colors
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ topHeadlines }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
