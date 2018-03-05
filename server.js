const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 4200, () => console.log(`App listening on port ${process.env.PORT} and 4200!`));
