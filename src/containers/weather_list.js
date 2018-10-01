import React from 'react';
import { connect } from 'react-redux';
import './weather_list.css';


const mapStateToProps = state => {
	return {
		term: state.searchWeather.term,
		isPending: state.requestWeather.isPending,
		weather: state.requestWeather.weather,
		error: state.requestWeather.error
	}
};

class WeatherList extends React.Component {

	renderWeather(data) {
		return (
			<tr>
				<td>{data.city.name}</td>
			</tr>
		);
	}

	render() {
		const arr = this.props.weather;
		if(arr.length !== 0) {
			console.log(arr.city.name);
			return (
				<table className="table_list">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature</th>
							<th>Pressure</th>
							<th>Humidity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{arr.city.name}</td>
						</tr>
					</tbody>
				</table>
			);
		}
		
		return '';
	}
}

export default connect(mapStateToProps)(WeatherList);


