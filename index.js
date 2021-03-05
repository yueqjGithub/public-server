const { exec } = require('child_process');
const express = require('express')
const app = express()
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const handlers = require('./handler.js')

const accessLogStream = fs.createWriteStream(path.join(__dirname+'/logs/', 'access.log'), {flags: 'a'});
app.use(morgan('short', {stream: accessLogStream}));



app.get('/webStart', function (req, res) {
  handlers.webStart(req, res)
  // res.send('hill')
})


const server = app.listen(3001, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});