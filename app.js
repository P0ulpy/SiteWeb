const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

if(process.argv.slice(2).includes('-countdown'))
{
    app.use('/', express.static(path.join(__dirname, './client/countdown')));
}
else
{
    app.use('/', express.static(path.join(__dirname, './client')));
}

app.listen(80);