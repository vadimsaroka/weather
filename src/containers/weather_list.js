import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
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
		const temps = data.list.map(e => e.main.temp);
		const press = data.list.map(press => press.main.pressure);
		const hum = data.list.map(hum => hum.main.humidity);
		const {lat, lon} = data.city.coord;
		
		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon}/></td>
				<td><Chart data={temps} color="orange" units="F"/></td>
				<td><Chart data={press} color="green" units="hPa"/></td>
				<td><Chart data={hum} color="blue" units="%"/></td>
			</tr>
		);
	}

	render() {

		return (
			<table className="table_list">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
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


