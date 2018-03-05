//set for Heroku deployment
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 4200, () => console.log(`App listening on port ${process.env.PORT} and 4200!`));
