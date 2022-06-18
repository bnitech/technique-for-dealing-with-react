import { combineReducers } from 'redux';
import auth from './auth.tsx';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
