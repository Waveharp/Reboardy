import React from 'react';
// import addons from 'react/addons';
import expect from 'expect';

// import GameGrid from '../../components/GameGrid';

const TestUtils = React.addons.TestUtils;

describe('GameGrid component', function() {

	// Mock state
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
		},
		{
			"name": "BANG!",
			"objectid": "124",
			"yearpublished": "2012",
			"image": "http://cf.geekdo-images.com/images/pic1170986.jpg",
			"thumbnail": "",
			"own": "yes",
			"numplays": 15,
			"likes": 7,
			"type": "boardgame"
		}
	];

	before('render and locate element', function () {

		const renderedComponent = TestUtils.renderIntoDocument(
			<GameGrid games={games} />
		);

		const gameGrid = TestUtils.findRenderedDOMComponentWithClass(
				renderedComponent,
				'gameGrid'
			);

		this.gameGrid = gameGrid.getDOMNode();

	});

	it('GameGrid should exist', function() {
		expect(this.gameGrid).toExist();
	});

});