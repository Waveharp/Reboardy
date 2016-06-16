import React from 'react';
import Game from './Game';

const GameGrid = React.createClass({
	render() {
		return (
			<div className="game-grid">
				{this.props.games.map((game, i) => <Game {...this.props.games.game} key={i} i={i} game={game} />)}
			</div>
		)
	}
});

export default GameGrid;