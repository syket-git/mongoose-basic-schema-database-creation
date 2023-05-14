import express, { Request, Response } from 'express';
import { createUser, getUsers } from './user.controller';

const router = express.Router();

router.get('/', getUsers);
router.post('/create-user', createUser);

export default router;
