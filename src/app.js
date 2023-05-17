const express = require('express');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const cors = require("cors");
const registerAPIRoutes = require('./routes');
const { options } = require('./swaggerOptions');
const app = express();


app.use(helmet());
app.use(cors());

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

registerAPIRoutes(app);

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

module.exports = app;