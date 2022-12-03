const express = require('express');
const v1Routes = require('../v1/routers');
const errorHandler = require('../helpers/errorHandler');

const app = express();

app.use('/api/v1', v1Routes);
app.use((error, req, res, next) => errorHandler(error, { httpResponder: res }));

module.exports = app;
