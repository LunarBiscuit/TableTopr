var express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/games', function (req, res) 
{

	var data = [
		{
			/* IGH Value Example, cost is high but loads of hours played and rating */
			name: "Zombicide",
			image : 'no-image.png',
			id : '1',
			rating : '7',
			weight: 'medium',
			hoursPayed: '200',
			value: '160.00',
			VOP: ((7 * 2) / ((160/3)/(200/2))) // VOP - (rating / 2)  / ((Cost of Purchase / 3) / (Hours Played/2))
		},
		{
			/* Rated high, but not a lot of play, ok cost */
			name: "Mage Knight",
			image : 'no-image.png',
			id : '2',
			rating : '8',
			weight: 'heavy',
			hoursPayed: '5',
			value: '60.00',
			VOP: ((8 * 2) / ((60/3)/(5/2))) // VOP - (rating / 2)  / ((Cost of Purchase / 3) / (Hours Played/2))
		},
		{
			/* Very Expensive, poor rating and okish hours played */
			name: "Talisman",
			image : 'no-image.png',
			id : '3',
			rating : '4',
			weight: 'heavy',
			hoursPayed: '12',
			value: '250.00',
			VOP: ((4 * 2) / ((250/3)/(12/2))) // VOP - (rating / 2)  / ((Cost of Purchase / 3) / (Hours Played/2))
		}
	];

  res.send(data);

});

app.get('/sessions', function (req, res) 
{
	var data = [
		{
			name: "Halloween Games Night",
			image : 'no-image.png',
			id : '1',
			rating : '3',
			players : '',
			host: '',
			desc: 'Spooky themed Night',
			games: ['Zombicide','One Night Ultimate Werewolf'],
			duration: '6:00'
		}
	];

  res.send(data);

});

app.listen(3003, function () {
  console.log('Tabletopr Data server listening on port 3003!');
});