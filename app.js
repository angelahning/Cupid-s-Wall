const express = require('express');
const hbs = require('hbs');
const path = require('path');
const favicon = require('serve-favicon');


var app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/assets')));

app.use(favicon(path.join(__dirname, '/assets', 'favicon.ico')))

app.get('/', (req, res) => {
  var content = {
    tagList: ['Story', 'Date', 'Quote', 'Flirt'],
    tipList: [
      {
        title: 'Title #1',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
        tag: '#Story #Quote'
      },
      {
        title: 'Title #2',
        content: 'Content #2'
      },
      {
        title: 'Title #3',
        content: 'Content #3'
      },
      {
        title: 'Title #4',
        content: 'Content #4'
      },
      {
        title: 'Title #5',
        content: 'Content #5'
      },
      {
        title: 'Title #6',
        content: 'Content #6'
      },
      {
        title: 'Title #7',
        content: 'Content #7'
      },
      {
        title: 'Title #8',
        content: 'Content #8'
      },
      {
        title: 'Title #9',
        content: 'Content #9'
      },
      {
        title: 'Title #10',
        content: 'Content #10'
      }
    ]
  }
  res.render('index', content);
})

app.listen(3000);
