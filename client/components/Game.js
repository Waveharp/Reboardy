import React from 'react';
import { Link } from 'react-router';

import { Card, CardImage, Heading, Text } from 'rebass';

const Game = React.createClass({
	render() {
		const { game, i, comments } = this.props;
		return (
			<figure>

				<Card
					rounded
					width={256}
				>
					<Link to={`/view/${game.objectid}`}>
						<CardImage 
							className="rebass-card-image" 
							src={game.image}
							style={{ height: 320 }} />
						<Heading
							level={2}
							size={3}
						>
							{game.name}
						</Heading>
					</Link>	
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
				</Card>


			</figure>
		)
	}
});

export default Game;
				
// <div className="grid-game-wrap">
// 	<Link to={`/view/${game.objectid}`}>
// 		<img className="grid-image" src={game.image} />
// 		<h3>{game.name}</h3>
// 	</Link>
// </div>