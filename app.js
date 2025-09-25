//testing
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const favicon = require('serve-favicon');
const fs = require('fs');
const bodyParser = require('body-parser');

var content = {}

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/assets')));

app.use(favicon(path.join(__dirname, '/assets', 'favicon.ico')))

app.get('/', (req, res) => {
  //content = database.content;
  content = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
  res.render('index', content);
})

app.get('/addanote', (req, res) => {
  res.render('addanote');
})

app.post('/addanote', (req, res) => {
	var newObj = {};
	newObj.title = req.body.title;
	newObj.content = req.body.content;
	// for( var i = 0; i < req.body.tag.length; i++ ) {
	// 	newObj.tag += req.body.tag[i];
	// }
  newObj.tag = "#Story";
  content = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
  content.tipList.push(newObj);
  fs.writeFileSync('./database.json', JSON.stringify(content), 'utf8', (err) => {
    console.log(err);
  })
	res.redirect('/');
});

app.listen(3000);
