import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import uploadConfig from './config/upload';
import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
