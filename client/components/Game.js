import React from 'react';
import { Link } from 'react-router';

const Game = React.createClass({
	render() {
		// const { game, i } = this.props;
		// console.log("this should be the game name");
		return (
			<figure>
				<div>
					<Link to={`/view/${this.props.game.$.objectid}`}>
						{JSON.stringify(this.props.game.name)}
					</Link>
				</div>			
			</figure>
		)
	}
});

export default Game;