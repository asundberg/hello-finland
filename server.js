var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 8080);

// before pushing to heroku:
// first npm run build
// then git commit + push
// then git push heroku master
