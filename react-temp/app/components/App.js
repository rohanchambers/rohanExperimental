import React from 'react';
import ReactDOM from 'react-dom';

class Rohan extends React.Component {
	constructor(props) {
		super(props);
		this.state = { weather: 'sunny'};
		this.changeWeather = this.changeWeather.bind(this);
	}

	// *todo Get this function setState to work
	changeWeather() {
		this.setState({
			weather: 'rainy'
		});
	}

	render() {
		const name = 'Rohan';

		return (
			<div>
				<h1>Hello world, yo! The weather is, {this.state.weather}</h1>
				<h2>The temperature is {3 * 10} degrees</h2>
				<p>Goodbye, {name} {this.props.lastName}</p>
			</div>
		)
	}
}

// In case Rohan in render below has no attribute give it a default
Rohan.defaultProps = { lastName: 'Jordan' };

ReactDOM.render(
  <Rohan lastName="Chambers" />,
  document.getElementById('app')
);