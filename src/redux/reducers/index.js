import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage'
import subscribeReducer from './subscribeReducer';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

const reducers = combineReducers({
    subscribeReducer
});

export default persistReducer(persistConfig, reducers);
