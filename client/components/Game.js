import React from 'react';
import { Link } from 'react-router';

const Game = React.createClass({
	render() {
		const { game, i, comments } = this.props;
		return (
			<figure>
				<div>
					<Link to={`/view/${game.objectid}`}>
						{game.name}
					</Link>
				</div>

				<figcaption>
					<div className="like-button">
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