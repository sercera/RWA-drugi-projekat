import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./js/components/App";
import createSagaMiddleware from 'redux-saga';
import { createStore,applyMiddleware } from "redux";
import rootReducer from "./js/reducers/index";
import { watcherImagesLoadSaga, watcherHeroLoadSaga } from './js/saga/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherImagesLoadSaga);
sagaMiddleware.run(watcherHeroLoadSaga);

render(
    <Provider store={store}>
          <App/>
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();