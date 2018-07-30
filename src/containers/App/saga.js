import { put, takeLatest } from 'redux-saga/effects';

import * as actions from './actions';

let defaultState = {
  stage: 0,
};

function* init() {
  yield put({
    type: actions.START_GAME,
    payload: {
      ...defaultState,
      stage: 0,
    },
  });
}

export default function* sagas() {
  yield takeLatest(actions.INIT, init);
}
