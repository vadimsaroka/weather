import React from 'react';
import './search_bar.css';
import { connect } from 'react-redux';
import { onSearchfieldChange, fetchWeather } from '../actions/index';


// const mapStateToProps = state => {
// 	return {
// 		term: state.searchWeather.term,
// 		isPending: state.requestWeather.isPending,
// 		weather: state.requestWeather.weather,
// 		error: state.requestWeather.error
// 	}
// };

const mapDispatchToProps = dispatch => {
	let query;
	return {
		onInputChange: event => {
			dispatch(onSearchfieldChange(event.target.value));
			return (query=event.target.value)
		},
		onSubmitChange: event => {
			dispatch(fetchWeather(query));
			event.preventDefault();
			event.target.reset();
		}
	}
};

class SearchBar extends React.Component {

	render() {
		return (
			<form onSubmit={this.props.onSubmitChange} className="search_bar">
				<input 
					value={this.props.term}
					onChange={this.props.onInputChange}
					className="search_bar_input" 
					placeholder="Get a five-day forecast in your favorite cities"
				/>
				<button type="submit" className="search_bar_button">
					Submit
				</button>
			</form>
		);
	}
}

export default connect(null, mapDispatchToProps)(SearchBar);