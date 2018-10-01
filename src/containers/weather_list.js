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
		const name = data.city.name;

		return (
			<tr key={name}>
				<td>{data.city.name}</td>
			</tr>
		);
	}

	render() {

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
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);

	}
}

export default connect(mapStateToProps)(WeatherList);


