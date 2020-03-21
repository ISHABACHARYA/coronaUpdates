import React, { useState, useEffect } from "react";
import { BottomTabNavigator } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import createStore from "./redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

export default () => {
  const { store, persistor } = createStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
