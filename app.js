const express = require('express');
const hbs = require('hbs');
const path = require('path');


var app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/assets')));

app.get('/', (req, res) => {
  var content = {
    tipList: [
      {
        title: 'Title #1',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.'
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
      }
    ]
  }
  res.render('index', content);
  console.log('Received request: ' + req.originalUrl);
})

app.listen(3000);
