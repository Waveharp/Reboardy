import React from 'react';

import { Donut, Container, Stat, Space, Divider, Heading, Avatar } from 'rebass';

const Profile = React.createClass({
	render() {
		return (
			<div className="profile">
				<Container>
					<Avatar 
						src={'http://lorempixel.com/64/64/cats'}
					/>
					<Heading level={2}>
						Waveharp's Profile
					</Heading>
					<Divider />
					<Stat
						label="Wins"
						value="23"
					/>
					<Space x={3} />
					<Stat
						label="Losses"
						value="4"
					/>
					<Space x={4} />
					<Stat
						label="Most Played"
						value="Secret Hitler"
					/>
					<Divider />
				</Container>
			</div>
		)
	}
});

export default Profile;