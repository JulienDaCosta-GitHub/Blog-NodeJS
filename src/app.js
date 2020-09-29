const express = require('express')
const app = express()
const ejs = require('ejs-locals');
const path = require('path');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/post', function(req, res) {
    res.render('show')
})

app.use(express.static('public'));

app.engine('ejs', ejs);
app.set('view engine' , 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.listen(3000, function() {
    console.log('Server démarré sur http://localhost:3000')
})
