import {
	CHANGE_SEARCH_FIELD,

	REQUEST_WEATHER_PENDING,
	REQUEST_WEATHER_SUCCESS,
	REQUEST_WEATHER_FAILED
} from '../constants';



const initStatesearchField = {
	term: ''
}

export const searchWeather = (state=initStatesearchField, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {term: action.payload});
		default:
			return state;
	}
};


const initStateRequestWeater = {
	isPending: false,
	weather: [],
	error: ''
}

export const requestWeather = (state=initStateRequestWeater, action={}) => {
	switch(action.type) {
		case REQUEST_WEATHER_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_WEATHER_SUCCESS:
			return Object.assign({}, state, {weather: action.payload, isPending:false})
		case REQUEST_WEATHER_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending:false})
		default:
			return state;
	}
}