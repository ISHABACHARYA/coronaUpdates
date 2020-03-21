import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Provider, connect } from "react-redux";
import { Metrics, Fonts } from "../helpers";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { HomeScreen, NewsScreen, KnwlgeScreen } from "../screens";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = props => {
  const stackOptions = {
    activeTintColor: props.theme.colors.tabBarActive,
    tabStyle: { height: Metrics.navBarHeight, borderTopWidth: 0 },
    labelStyle: { fontFamily: Fonts.bold, fontWeight: "bold" },
    borderTopColor: "transparent",
    inactiveBackgroundColor: Colors.white,
    activeBackgroundColor: Colors.white
  };
  return (
    // <Provider store={null}>
    <Tab.Navigator tabBarOptions={stackOptions} initialRouteName={"Home"}>
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons
              name="home"
              color={focused ? props.theme.colors.tabBarActive : props.theme.colors.tabBar}
              size={Metrics.icons.small}
            />
          )
        }}
      />
      <Tab.Screen
        name={"News"}
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons
              name="book"
              color={focused ? props.theme.colors.tabBarActive : props.theme.colors.tabBar}
              size={Metrics.icons.small}
            />
          )
        }}
      />
      {/* <Tab.Screen
        name={"Things to know"}
        component={KnwlgeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons
              name="bookmark"
              color={focused ? props.theme.colors.tabBarActive : props.theme.colors.tabBar}
              size={Metrics.icons.small}
            />
          )
        }}
      /> */}
    </Tab.Navigator>
    // </Provider>
  );
};
const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};
export default connect(mapStateToProps)(BottomTabNavigator);
