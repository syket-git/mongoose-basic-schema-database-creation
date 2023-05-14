import express, { Application } from 'express';
import cors from 'cors';

import userRouter from './app/modules/users/user.route';

const app: Application = express();

//* Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//* Router Middleware

app.use('/api/v1/user', userRouter);

export default app;
