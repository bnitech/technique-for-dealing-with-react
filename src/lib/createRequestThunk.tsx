import { finishLoading, startLoading } from '../modules/loading';

export default function createRequestThunk(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params: any) => async (dispatch: any) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
}
