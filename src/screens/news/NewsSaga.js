import NewsConfig from "./News.config";
import { all, takeLatest, put, takeEvery, call } from "redux-saga/effects";
import { Api } from "../../helpers";
import secrets from "secrets";
import NewsAPI from "newsapi";
import * as NewsActions from "./NewsActions";

function* topHeadlines() {
  yield put(NewsActions.loading());
  try {
    let newsApi = new NewsAPI(secrets.newsApi);
    let res = yield call(newsApi.v2.topHeadlines, {
      q: "corona virus covid-19",
      category: "health",
      language: "en",
      country: "us"
    });
    yield put(NewsActions.topHeadlinesSuccess(res.articles));
  } catch (err) {
    console.log("error from topHeadlines", err);
    yield put(NewsActions.topHeadlinesError(err));
  }
}
export default function* watchNewsRequest() {
  yield all([takeEvery(NewsConfig.TOP_HEADLINES, topHeadlines)]);
}
