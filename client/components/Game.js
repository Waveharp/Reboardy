import React from 'react';
import { Link } from 'react-router';

const Game = React.createClass({
	render() {
		const { game, i, comments } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-game-wrap">
					<Link to={`/view/${game.objectid}`}>
						<img className="grid-image" src={game.image} />
						<h3>{game.name}</h3>
					</Link>
				</div>

				<figcaption>
					<div className="control-buttons">
						<button className="likes" onClick={this.props.increment.bind(null, i)}>&hearts; {game.likes}</button>
						<Link to={`view/${game.objectid}`}>
							<span className="comment-count">
								{comments[game.objectid] ? comments[game.objectid].length : 0}
							</span>
						</Link>
					</div>
				</figcaption>

			</figure>
		)
	}
});

export default Game;