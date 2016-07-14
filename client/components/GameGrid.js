import React from 'react';
import Game from './Game';
import Filter from './Filter';

const GameGrid = React.createClass({
	render() {
		return (
			<div>
				<div className="game-grid">
					{this.props.games.map((game, i) => <Game {...this.props} key={i} i={i} game={game} />)}
				</div>
			</div>
		)
	}
});

export default GameGrid;