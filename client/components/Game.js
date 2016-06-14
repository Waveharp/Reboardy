import React from 'react';
import { Link } from 'react-router';

const Game = React.createClass({
	render() {
		// const { game, i } = this.props;
		return (
			<figure>
				<div>
					<Link to={`/view/${this.props.game.$.objectid}`}>
						{JSON.stringify(this.props.game.name[0]._)}
					</Link>
				</div>			
			</figure>
		)
	}
});

export default Game;