import HomeConfig from "./Home.config";
import { all, takeLatest, put, takeEvery, call } from "redux-saga/effects";
import * as HomeActions from "./HomeActions";
import env from "env";
import HomeRoutes from "./Home.routes";
import { Api } from "../../helpers";

function* overallData() {
  yield put(HomeActions.loading());
  try {
    let URL = `${env.MATHDROID_URL}${HomeRoutes.overall2}`;
    console.log("overall URL is ----", URL);
    const res = yield call(Api.get, URL);
    let results = {};
    if (res) {
      results = {
        confirmedCount: res.confirmed.value,
        curedCount: res.recovered.value,
        deadCount: res.deaths.value,
        updateTime: res.lastUpdate
      };
      yield put(HomeActions.overallDataSuccess(results));
    } else {
      throw res;
    }
  } catch (err) {
    console.log("error from overall Data fetching saga", err);
    yield put(HomeActions.overallDataFailure(err));
  }
}

function* areaData(actions) {
  yield put(HomeActions.loading());
  try {
    // let URL = `${env.API_BASE_URL}${HomeRoutes.area}${actions.payload}`;
    let URL = `${env.MATHDROID_URL}${HomeRoutes.area2}/${actions.payload}`;
    console.log("area URL is ----", URL);
    const res = yield call(Api.get, URL);
    let results;
    if (res) {
      results = {
        confirmedCount: res.confirmed.value,
        curedCount: res.recovered.value,
        deadCount: res.deaths.value,
        updateTime: res.lastUpdate
      };
      // yield put(HomeActions.areaDataSuccess(res.results[0]));
      yield put(HomeActions.areaDataSuccess(results));
    } else {
      throw res;
    }
  } catch (err) {
    console.log("error from area Data fetching saga", err);
    yield put(HomeActions.areaDataFailure(err));
  }
}

function* areaList() {
  yield put(HomeActions.loading());
  try {
    let URL = `${env.MATHDROID_URL}${HomeRoutes.areaList2}`;
    const res = yield call(Api.get, URL);
    console.log("list URL is ----", URL, res?.countries);
    if (res) {
      // yield put(HomeActions.areaListSuccess(res.results));
      yield put(HomeActions.areaListSuccess(res));
    } else {
      throw res;
    }
  } catch (err) {
    console.log("error from area list fetching saga", err);
    yield put(HomeActions.areaListFailure(err));
  }
}

export default function* watchHomeRequest() {
  yield all([
    takeEvery(HomeConfig.OVERALL, overallData),
    takeEvery(HomeConfig.AREA, areaData),
    takeLatest(HomeConfig.AREA_LIST, areaList)
  ]);
}
