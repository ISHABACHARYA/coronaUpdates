import { combineReducers } from "redux";
import { HomeReducer, NewsReducer, KnwlgeReducer } from "../screens";
import { ThemeReducer } from "../themes";

const CombineReducer = combineReducers({
  home: HomeReducer,
  theme: ThemeReducer,
  news: NewsReducer,
  knowledge: KnwlgeReducer
});

export default CombineReducer;
