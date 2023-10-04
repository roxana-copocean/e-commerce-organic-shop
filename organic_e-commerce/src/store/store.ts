// REDUX STORE
import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';

import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

// root reducer
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};
const persistConfig: ExtendedPersistConfig = {
	key: 'root',
	storage: storage,
	whitelist: [ 'cart' ]
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
	process.env.NODE_ENV === 'development' && logger,
	sagaMiddleware
].filter((middlewear): middlewear is Middleware => Boolean(middlewear));

const composedEnhancer =
	(process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
