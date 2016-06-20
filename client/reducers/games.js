function games(state = [], action) {
	// console.log("The game will change");
	// console.log(state, action);

	switch(action.type) {
		case 'INCREMENT_LIKES':
			console.log("Incrementing likes");
			const i = action.index;
			return [
				...state.slice(0, i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1),
			]
		default:
			return state;
	}

	return state;
}

export default games;