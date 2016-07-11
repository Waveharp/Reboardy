import React from 'react';
import { Link } from 'react-router';
import { Button, Heading, Toolbar, 
				 NavItem, Space, Avatar 
			 } from 'rebass';

const Main = React.createClass({
	render() {
		return (
			<div>
				<Toolbar>
					<Heading level={1}>
						<Link to="/">Boardy</Link>
					</Heading>
					<Space
						auto
						x={1}
					/>
					<NavItem is="a" href="/addgame">
						<Button>Add a game</Button>
					</NavItem>
					<NavItem is="a" href="/account">
						My Account
						<Space />
						<Avatar
							circle
							size={48}
							src='http://lorempixel.com/64/64/cats'
						/>
					</NavItem>
				</Toolbar>
				{React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
			</div>
		)
	}
});

export default Main;