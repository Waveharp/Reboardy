import React from 'react';

// var data = require('xml!../data/collection.xml');
// console.dir(data);

// var testData = data.items.item[0].name;
// console.log(testData);

const Single = React.createClass({
	render() {
		return (
			<div className="single-game">
				I'm the single.
				<h1 className="game-title">Game Title</h1>
			</div>
		)
	}
});

export default Single;