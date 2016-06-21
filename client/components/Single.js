import React from 'react';
import Game from './Game';
import Comments from './Comments';

const Single = React.createClass({
	render() {
		// index of the game
		const i = this.props.games.findIndex((game) => game.objectid === this.props.params.objectId);
		console.log(i);

		// get the game data
		const game = this.props.games[i];
		console.log(game);

		// const gameComments = this.props.comments[objectId] || [];

		return (
			<div className="single-game">
				<Game i={i} game={game} {...this.props} />
				<Comments />
			</div>
		)
	}
});

export default Single;