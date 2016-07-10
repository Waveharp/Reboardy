import React from 'react';
import { Link } from 'react-router';
import { Button, Heading } from 'rebass';

const Main = React.createClass({
	render() {
		return (
			<div>
				<Heading level={1}>
					<Link to="/">Boardy</Link>
				</Heading>
				<Link to="/addgame"><Button>Add a game</Button></Link>
				{React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
			</div>
		)
	}
});

export default Main;