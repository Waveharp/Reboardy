import React from 'react';
import { Link } from 'react-router';

const Game = React.createClass({
	render() {
		const { game, i } = this.props;
		return (
			<figure>
				<div>
					<Link to={`/view/${game.objectid}`}>
						{game.name}
					</Link>
				</div>

				<figcaption>
					<div className="like-button">
						<button onClick={this.props.increment.bind(null, i)}>&hearts; {game.likes}</button>
					</div>
				</figcaption>

			</figure>
		)
	}
});

export default Game;