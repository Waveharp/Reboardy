import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Boardy</Link>
				</h1>
				<ul>
					<li>
						<Link to="/addgame"><button>Add a game</button></Link>
					</li>
					<li>
						<Link to="/firebasetest"><button>Firebase Test</button></Link>
					</li>
				</ul>
				{React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
			</div>
		)
	}
});

export default Main;