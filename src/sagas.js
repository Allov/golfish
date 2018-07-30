import { all, fork } from 'redux-saga/effects';

import app from './containers/App/saga';

export default function* root() {
  yield all([fork(app)]);
};
