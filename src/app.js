const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const cors = require("cors");
const registerAPIRoutes = require('./routes');
const app = express();


app.use(helmet());
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

registerAPIRoutes(app);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        status: 'error',
        data: err.message,
        message: 'Something went wrong!!! Please try again later.'
    });
});

module.exports = app;