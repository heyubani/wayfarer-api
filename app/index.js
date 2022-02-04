/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import config, { initConfig } from './config';
import db from './db';
import router from './routes/v1';

const app = express();
const host = config.HOST;
const port = config.PORT || 2020;
const apiVersion = config.API_VERSION || 'v1';

initConfig(app);

app.get('api/v1', (req, res) => {
  res.statusCode(200).json({
    status: 'success',
    message: 'Home route api',
  });
});

app.use('/api/v1', router);

// ERROR HANDLING
app.use((req, res) => {
  res.status(404).json({
    status: 'Not Found',
  });
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({
    status: 'Failed',
    message: err.message,
  });
});

db.connect()
  .then((operation) => {
    app.listen(port, () => {
      operation.done();
      logger.info(`Server started at ${host}:${port}/api/${apiVersion}/`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    logger.error(error.message);
    console.log('====', logger);
  });

export default app;
