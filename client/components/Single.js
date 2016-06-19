import React from 'react';
import Game from './Game';

const Single = React.createClass({
	render() {
		// index of the game
		const i = this.props.games.findIndex((game) => game.objectid === this.props.params.objectid);
		console.log(i);
		// not sure why this is logging -1 instead of the correct number

		// get the game data
		const game = this.props.games[i];
		console.log(game);

		// this line does return the expected result
		console.log(this.props.games);

		return (
			<div className="single-game">
				I'm a single game.
			</div>
		)
	}
});

export default Single;