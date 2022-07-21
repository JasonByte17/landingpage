import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
  
export const store = createStore(rootReducer,compose(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
