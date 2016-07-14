import React from 'react';
import { Slider, Container } from 'rebass';

const Filter = React.createClass({
	render() {
		return (
			<div className="filter">
				<Container>
					<p>I'm the filter.</p>
					<Slider
						fill
						defaultValue={50}
						label="# of Players"
						name="playerCount"
					/>
				</Container>
			</div>
		)
	}
});

export default Filter;