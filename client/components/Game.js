import React from 'react';
import { Link } from 'react-router';

function replacer(key, value) {
  if (typeof value === "string") {
    return value;
  }
  return undefined;
}

const Game = React.createClass({
	render() {
		// const { game, i } = this.props;
		// console.log("this should be the game name");
		return (
			<figure>
				<div>
					<Link to={`/view/${this.props.game.$.objectid}`}>
						<pre>
							{JSON.stringify(this.props.game.name[0]._)}
						</pre>
					</Link>
				</div>			
			</figure>
		)
	}
});

export default Game;