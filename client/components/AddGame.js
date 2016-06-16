import React from 'react';

const AddGame = React.createClass({
	
	handleSubmit(e) {
		e.preventDefault();
		console.log("submitting");
		const name = this.refs.name.value;
		console.log(name);

		// need to create this function
		// this.props.addGame(name);

	},

	render() {
		return (
			<div>
				<h4>Add a game to your collection</h4>
				<form ref="addGameForm" className="add-game-form" onSubmit={this.handleSubmit} >
					<input type="text" ref="name" placeholder="Game name"/>
					<input type="submit" />
				</form>
				<p>or</p>
				<h4>Import your collection from BGG</h4>
				<button>Import</button>
			</div>
		)
	}
});

export default AddGame;

// need two functions here:
// 1) to search my local collection data and add games + relevant info from each entry - add as json object, of course
// 2) given the name of a game, search the bgg api and copy relevant info to my own database
// I'm going to build and test method two on my local data first, then use that method to iterate over the local data, and finally implement the api requests.