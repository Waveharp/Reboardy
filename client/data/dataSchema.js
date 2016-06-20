const games = [
	{
		"name": "Catan",
		"objectid": "123",
		"yearpublished": "2010",
		"image": "http://cf.geekdo-images.com/images/pic2419375.jpg",
		"thumbnail": "",
		"own": "yes",
		"numplays": 20,
		"likes": 10,
		"type": "boardgame"
	}
];

const comments = {
	"123": [ // objectId of a game
		{
			"text": "This is a comment",
			"user": "Josh"
		},
		{
			"text": "these comments belongs to a game with an id of 123",
			"user": "testuser"
		}
	],
	"124": [
		{
			"text": "a comment on game 124",
			"user": "Josh"
		}
	]
};

const wins = {
	"Josh": [
		{
			"game": "Catan",
			"wins": 3
		},
		{
			"game": "Sheriff of Nottingham",
			"wins": 1
		}
	],
	"Matt" [
		{
			"game": "Cosmic Encounter",
			"wins": 1
		}
	]
}