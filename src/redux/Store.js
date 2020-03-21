import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import CombineReducer from "./CombineReducer";
import CombineSaga from "./CombineSaga";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
// import storage from "redux-persist/es/storage";
import AsyncStorage from "@react-native-community/async-storage";

export default () => {
  const middleware = [];
  const enhancer = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  const logger = createLogger({
    timestamps: true,
    collapsed: true,
    duration: true,
    diff: true
  });
  if (__DEV__) {
    middleware.push(logger);
  }
  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blackList: [],
    stateReconciler: hardSet,
    debug: false
  };
  enhancer.push(applyMiddleware(...middleware));
  const persistedReducer = persistReducer(persistConfig, CombineReducer);
  const store = createStore(persistedReducer, undefined, compose(...enhancer));
  const persistor = persistStore(store);
  sagaMiddleware.run(CombineSaga);
  return {
    store,
    persistor
  };
};
