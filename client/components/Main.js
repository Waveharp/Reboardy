import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Boardy</Link>
				</h1>
				<h2>
					<Link to="/addgame">Add a game</Link>
				</h2>
				{React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
			</div>
		)
	}
});

export default Main;