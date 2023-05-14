import IUser from './user.interface';
import User from './user.model';

export const getUsers = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const createUserData = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  user.save();
  return user;
};
