import { takeEvery, call, put } from "redux-saga/effects";
import { SIGNIN_REQUEST, SIGNUP_REQUEST } from "../actions/types";
import userApi from "../../api/userApi";
import { userActions } from "../actions";

function* signInRequest(action) {
  try {
    const user = yield call(userApi.signIn, action.payload);
    const { data, message } = user;
    yield put(userActions.signInSuccess(data[0], message));
  } catch (error) {
    yield put(userActions.signInSuccess({}));
  }
}

function* signUpRequest(action) {
  try {
    const user = yield call(userApi.signUp, action.payload);
    const { data } = user;
    yield put(userActions.signUpSuccess(data));
  } catch (error) {
    yield put(userActions.signUpSuccess({}));
  }
}

function* userWatcher() {
  yield takeEvery(SIGNIN_REQUEST, signInRequest);
  yield takeEvery(SIGNUP_REQUEST, signUpRequest);
}

export { userWatcher };
