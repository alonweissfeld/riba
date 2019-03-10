const path = require('path');
const express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('pages/scales');
})

app.get('/play', function(req, res) {
    let scale = req.query.scale;
    let diese = req.query.diese;

    if (diese == 1) scale += '#'
    else if (diese == -1) scale += 'b'

    res.render('pages/play', {
        scale: scale,
        isMinor: req.query.isMinor
    });
})

app.listen(process.env.PORT || 3000, () => console.log("Listening on port 3000"));
