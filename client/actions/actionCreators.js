// need to plan actions for Boardy

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

// also add import existing collection action