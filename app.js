const path = require('path');
const express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname, 'public/views/index.html'));
    res.render('pages/index');
})

app.get('/play', function(req, res) {
    var scale = req.query.scale;

    if (scale) {
        // Default scale is in middle.
        scale += '4';
    }

    res.render('pages/play', { scale: scale });
})

app.listen(3000, () => console.log("Listening on port 3000"));
