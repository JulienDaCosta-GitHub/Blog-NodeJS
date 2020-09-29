const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bonjour')
})

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Server démarré sur http://localhost:3000')
})
