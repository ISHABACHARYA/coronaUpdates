import HomeRoutes from "./Home.routes";
import HomeConfig from "./Home.config";

export function loading() {
  return {
    type: HomeConfig.LOADING
  };
}
export function overallData() {
  return {
    type: HomeConfig.OVERALL
  };
}

export function overallDataSuccess(payload) {
  return {
    type: HomeConfig.OVERALL_SUCCESS,
    payload: payload
  };
}

export function overallDataFailure(payload) {
  return {
    type: HomeConfig.OVERALL_FAILURE,
    payload: payload
  };
}

export function areaData(payload) {
  return {
    type: HomeConfig.AREA,
    payload
  };
}
export function areaDataSuccess(payload) {
  return {
    type: HomeConfig.AREA_SUCCESS,
    payload
  };
}

export function areaDataFailure(payload) {
  return {
    type: HomeConfig.AREA_FAILURE,
    payload
  };
}
export function areaList(payload) {
  return {
    type: HomeConfig.AREA_LIST,
    payload
  };
}
export function areaListSuccess(payload) {
  return {
    type: HomeConfig.AREA_LIST_SUCCESS,
    payload
  };
}

export function areaListFailure(payload) {
  return {
    type: HomeConfig.AREA_LIST_FAILURE,
    payload
  };
}
