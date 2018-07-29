import storage from 'redux-persist/lib/storage'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import rootReducer from './reducers'


export default () => {
  const reducer = persistReducer(
    {
      key: 'cpplot',
      storage,
      whitelist: [],
      transforms: [],
    },
    rootReducer,
  )

  /* eslint-disable */
  // TODO: Cleanup to only trigger in DEV
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const initialState = {}
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware()),
  )
  persistStore(store)
  return store
}
