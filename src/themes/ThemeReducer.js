import ThemeConfig from "./Theme.config";
import { darkTheme, lightTheme, defaultTheme } from "./Colors";

const INITIAL_STATE = {
  colors: defaultTheme,
  selectedTheme: defaultTheme
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeConfig.DARK_MODE: {
      return {
        ...state,
        colors: darkTheme,
        selectedTheme: ThemeConfig.DARK_MODE
      };
    }
    case ThemeConfig.LIGHT_MODE: {
      return {
        ...state,
        colors: lightTheme,
        selectedTheme: ThemeConfig.LIGHT_MODE
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
