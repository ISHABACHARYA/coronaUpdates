import NewsConfig from "./News.config";

export function topHeadlines() {
  return {
    type: NewsConfig.TOP_HEADLINES
  };
}
export function loading() {
  return {
    type: NewsConfig.LOADING
  };
}

export function topHeadlinesSuccess(payload) {
  return {
    type: NewsConfig.TOP_HEADLINES_SUCCESS,
    payload
  };
}

export function topHeadlinesError(payload) {
  return {
    type: NewsConfig.TOP_HEADLINES_ERROR,
    payload
  };
}
