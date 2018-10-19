const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({
    error: 'loludied'
  });
});

app.get('/users', (req, res) => {

  res.send([{
      name: 'Mike',
      age:27
  }, {
    name:'Andrew',
    age:25
  }, {
    name:'eddie',
    age: 2
  }]);
});

app.listen(3000);

module.exports.app = app
