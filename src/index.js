import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import App from './components/App';
import { searchWeather, requestWeather } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({ searchWeather, requestWeather });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
