import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer
  // 他のリデューサを追加する場合はここに記述
});

export default rootReducer;