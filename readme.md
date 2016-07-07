# Boardy

Boardy is a board game picker app that will interface with the BoardGameGeek API. It will allow you to filter your collection by number of players, game time, etc. and more.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

## To Do

- [x] set up PostCSS
- [x] pass data from boardy.js to single component
- [ ] use api to get game data
- [ ] handle invalid characters in xml file (such as &)
- [x] build the game component
- [x] build gamegrid component
- [ ] build and implement game filtering
- [ ] implement play logger
- [ ] configure github pages deployment
- [ ] hook up to firebase
- [ ] use reactui components

## Future features
- [x] ability to comment on a game
- ability to comment on specific plays of a game
- winner's journal (winner of a play gets prompted for a short message about the game)


# App Direction 

Decided to keep usage of the API down just so I can have finer control over the app. Since it's just going to be for personal use, I want to have my own database - most likely using Firebase. I can call the BGG API using the search command to pull in game info on a per-game basis as I add new games to my collection. 

To populate it initially, I'll just have a manual collection import button, copy over the data that I want in a friendlier JSON format and toss the rest - so I'll only need to use that weird XML syntax for the data fetcher/API wrapper and not for the rest of the app. 

So:
	Need an API wrapper/call to:
	- import inital collection info, store to database
	- import relevant info on a per-game basis 
		- will add ability to add game by objectId property if that ends up being necessary


I suppose the first order of business is to finish building out the main functionality, then hook it up to firebase and store my existing collection. That will give me a good base to operate off of.

# UI

## Adding game to collection
- perform initial search with 'exact' parameter, then add option to expand it to similar titles - "didn't find what you were looking for?" sort of thing
- display relevant info on search results page - full game title, box art, release date