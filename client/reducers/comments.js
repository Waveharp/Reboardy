function gameComments(state = [], action) {
	switch(action.type){
		case 'ADD_COMMENT':
			// return new state with the new comment
			return [...state,{
				user: action.author,
				text: action.comment
			}]
		case 'REMOVE_COMMENT':
			console.log("removing a comment");
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	if(typeof action.objectId !== 'undefined') {
		return {
			// take current state
			...state,
			// overwrite this post with a new one
			[action.objectId]: gameComments(state[action.objectId], action)
		}
	}
	return state;
}

export default comments;