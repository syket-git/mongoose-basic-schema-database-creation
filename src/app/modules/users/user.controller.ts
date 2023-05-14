import { Request, Response } from 'express';
import { createUserData, getUsers as getUserData } from './user.service';
import IUser from './user.interface';

export const getUsers = (req: Request, res: Response) => {
  const users = getUserData();
  res.status(200).json({
    status: 'success',
    data: users,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const data: IUser = req.body;
  const user = await createUserData(data);
  res.status(200).json({
    status: 'success',
    data: user,
  });
};
