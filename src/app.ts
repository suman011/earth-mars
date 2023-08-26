import express from 'express';
import bodyParser from 'body-parser';
import communicationController from './controllers/communication.controller';

import './db';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', communicationController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
