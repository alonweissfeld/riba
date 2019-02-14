const path = require('path');
const express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('pages/scales');
})

app.get('/play', function(req, res) {
    res.render('pages/play', {
        scale: req.query.scale,
        diese: req.query.diese,
        isMinor: req.query.isMinor
    });
})

app.listen(3000, () => console.log("Listening on port 3000"));
