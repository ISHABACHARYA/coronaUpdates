import HomeConfig from "./Home.config";

const INITIAL_STATE = {
  loading: false,
  overallData: null,
  overallDataFail: null,
  areaData: null,
  areaList: [],
  areaListError: null,
  areaDataError: null
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case HomeConfig.LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case HomeConfig.OVERALL_SUCCESS: {
      return {
        ...state,
        overallData: actions.payload,
        loading: false
      };
    }
    case HomeConfig.OVERALL_FAILURE: {
      return {
        ...state,
        overallDataFail: actions.payload,
        loading: false
      };
    }
    case HomeConfig.AREA_SUCCESS: {
      return {
        ...state,
        overallData: actions.payload,
        loading: false,
        areaDataError: null
      };
    }
    case HomeConfig.AREA_FAILURE: {
      return {
        ...state,
        loading: false,
        areaDataError: actions.payload
      };
    }
    case HomeConfig.AREA_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        areaList: actions.payload,
        areaListError: null
      };
    }
    case HomeConfig.AREA_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        areaListError: actions.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
