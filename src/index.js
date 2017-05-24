import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import dashboardReducer from './dashboardReducer'
import statesData from './data/states-data';

const loggerMiddleware = createLogger()

const initialStates = {
  regionData: statesData,
  sortState: { key: 'regionName', direction: 'ASC' },
  data: {}
}

const store = createStore(
    dashboardReducer,
    initialStates,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
