import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from "redux"
import {Provider} from "react-redux"

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from "./store/reducers/result"

const logger = store => next => action =>{
    console.log("[MIDDLEWARE] dispatching", action);
    const result = next(action);
    console.log("[MIDDLEWARE] next state ", store.getState())
    return result
}

const rootReducer = combineReducers({
    ctr: counterReducer,
    rslt: resultReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
