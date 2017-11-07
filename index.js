const express = require('express');
const bodyParser = require('body-parser');
const appInsights = require('applicationinsights');

const app = express();

/**
 * Configure the application insights
 * Please change the instrumentation key for a valid one created by you
 */
appInsights.setup("instrumentation_key_here");
appInsights.start();
const client = appInsights.defaultClient;

/**
 * Configure express
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

/**
 * Middleware that will log all requests
 */
router.use((req, res, next) => {
  client.trackNodeHttpRequest({ request: req, response: res });
  next();
});

router.get('/ping', (req, res) => {
  return res.json('pong');
});

router.get('/error', (req, res, next) => {
  return next('critical error');
});

/**
 * Error middleware
 */
router.use((err, req, res, next) => {
  client.trackException({ exception: new Error(err.message) });
  res.status(err.status || 500).send(err.message);
});

app.use(router);
app.listen(8080);