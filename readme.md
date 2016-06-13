# Boardy

Boardy is a board game picker app that will interface with the BoardGameGeek API. It will allow you to filter your collection by number of players, game time, etc. and more.

## Running

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.

## To Do

### for Reduxstagram rebuild

- [] implement likes to have a simple action

### Boardy Proper

- [] set up PostCSS
- [] pass data from boardy.js to single component
- [] use api to get game data
- [] handle invalid characters in xml file (such as &)
- [x] build the game component
- [x] build gamegrid component
- [] build and implement game filtering
- [] implement play logger

## Future features
- ability to comment on a game
- ability to comment on specific plays of a game
- winner's journal (winner of a play gets prompted for a short message about the game)