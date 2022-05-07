import { finishLoading, startLoading } from '../modules/loading';
import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: any) {
    yield put(startLoading(type));
    try {
      const response: AxiosResponse = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
      yield put(finishLoading(type));
    }
  };
}
