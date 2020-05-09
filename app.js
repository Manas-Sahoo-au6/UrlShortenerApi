var express = require('express')
var app = express()


require('./db');

app.use(express.json({extended: false}))


app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))



module.exports = app