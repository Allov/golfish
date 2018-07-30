import { combineReducers } from 'redux';
import { reducer as appReducer } from './containers/App/recuder';

const reducers = combineReducers({
  appReducer,
});

export default reducers;
