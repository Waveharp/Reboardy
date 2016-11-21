import React from 'react';
import _ from 'lodash';

import 'firebase';
import firebaseDb from '../firebase/firebase';

const FirebaseTest = React.createClass({


	firebaseFunc() {
		console.log('yo');
		var gameTest = firebase.database().ref('games/').once('value').then(function(snapshot) {
			var game = snapshot.val().game;
		});
		console.log(gameTest);
	},

	firebaseFunc2() {
		var testGames = this.props.fetchGames();
		console.log(testGames);
		// returns undefined
	},

	// this function works as named
	firebaseFunc3() {
		console.log('writing some static data');
		firebase.database().ref('games/' + 'func3').set({
			username: "Josh",
			game: "Deception",
			plays: "0"
		});
	},

	render() {
		return (
			<div>
				<h1>List of games from my Firebase DB:</h1>
				<p>is in the console.</p>
				<button onClick={this.props.writeStaticData}>firebaseFunc</button>
			</div>
		)
	}
});

export default FirebaseTest;
