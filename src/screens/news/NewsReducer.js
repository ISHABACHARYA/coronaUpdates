import NewsConfig from "./News.config";

const INITIAL_STATE = {
  loading: false,
  topNews: [],
  topNewsError: null
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case NewsConfig.LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case NewsConfig.TOP_HEADLINES_SUCCESS: {
      return {
        ...state,
        loading: false,
        topNews: actions.payload,
        topNewsError: null
      };
    }
    case NewsConfig.TOP_HEADLINES_ERROR: {
      return {
        ...state,
        loading: false,
        topNewsError: actions.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
