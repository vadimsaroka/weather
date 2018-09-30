import {
	CHANGE_SEARCH_FIELD,

	REQUEST_WEATHER_PENDING,
	REQUEST_WEATHER_SUCCESS,
	REQUEST_WEATHER_FAILED
} from '../constants';

const API_KEY = 'fc8a29142c03c2e88ff14ad6d4934300';

export const onSearchfieldChange = text => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const fetchWeather = city => {
	return dispatch => {
		dispatch ({ type: REQUEST_WEATHER_PENDING });
		fetch(`https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&mode=xml&appid=${API_KEY}`)
		.then(response => response.json())
		.then(result => dispatch({ type: REQUEST_WEATHER_SUCCESS, payload: result }))
        .catch(error => dispatch({ type: REQUEST_WEATHER_FAILED, payload: error }))
	};
}