import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { finishLoading, startLoading } from './loading';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, (id: number) => id);
export const getUsers = createAction(GET_USERS);

function* getPostSaga(action: any) {
  yield put(startLoading(GET_POST));
  try {
    const post: AxiosResponse = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST));
}

function* getUserSaga() {
  yield put(startLoading(GET_USERS));
  try {
    const users: AxiosResponse = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USERS));
}

export function* sampleSage() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUserSaga);
}

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state: any, action: any) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state: any, action: any) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

export default sample;
