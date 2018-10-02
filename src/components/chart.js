import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const average = (data) => {
	const res = data.reduce((acc, cur) => {
		return (acc + cur);
	})

	const avg = Math.round(res / data.length);
	return avg;
}

export default (props) => {
	return (
		<div>
			<Sparklines  data={props.data}>
				<SparklinesLine color={props.color}></SparklinesLine>
				<SparklinesReferenceLine type="avg"/>
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}

// height={120} width={180}