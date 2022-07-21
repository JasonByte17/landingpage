import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { SUSCRIBE_REQUESTED } from '../actions';
import { subscribeError, subscribeSuccess } from '../actions/subscribeAction';
import { sendSubscribe } from '../services/subscribeServices';

// SUBSCRIBE SAGA

function* watchSubscribe(){
    yield takeEvery(SUSCRIBE_REQUESTED, subscribe);
}

const subscribeAsync = async (data) => {
    
    const res = await sendSubscribe(data);

    if (res.message) {
        throw new Error('Algo ha salido mal')
    }

    return res;

}

function* subscribe ({payload}) {
  const data = payload;
  try {
      const request = yield call(subscribeAsync, data);
      if (!request.message) {
          yield put(subscribeSuccess(request));
      }else{
          throw new Error('Error al obtener del Api');
      }

  } catch (error) {
      yield put(subscribeError(error.message));
  }
}

export default function* rootSaga() {
    yield all([
      fork(watchSubscribe),
    ]);
}