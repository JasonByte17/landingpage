import { all } from 'redux-saga/effects';
import subscribeSaga from './subscribeSaga';

export default function* rootSaga() {
  yield all([
    subscribeSaga(),
  ]);
}
