import { all, fork } from "redux-saga/effects";
import { HomeSaga, NewsSaga } from "../screens";

export default function* combineSaga() {
  yield all([fork(HomeSaga), fork(NewsSaga)]);
}
