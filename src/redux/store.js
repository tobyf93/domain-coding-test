import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const applyStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(state) {
  return applyStoreWithMiddleware(
    reducer,
    state,
    /* eslint-disable */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );
}
