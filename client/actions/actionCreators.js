// reduxstagram actions:
// increment, add comment, remove comment

// add comment functionality to games? might be neat
// might even go ahead and do 'likes', would be simple to implement even if it didn't get much use

// change to search through games for a name
// findIndex() ?
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

export function addComment(objectId, author, comment) {
	console.log("dispatching add comment");
	return {
		type: 'ADD_COMMENT',
		objectId,
		author,
		comment
	}
}

export function removeComment(objectId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		objectId
	}
}

// Firebase stuff

export function fetchGames() {
	return dispatch => {
		console.log('fetchGames');
		firebase.database().ref('/games/').once('value').then(function(snapshot){
			return(snapshot.val().games);
		});
	};
};