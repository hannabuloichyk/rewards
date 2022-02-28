import user from '../data/user.json';
import users from '../data/users.json';
import { IUser } from '../types/IUser';

const getUserData = () => {
  return new Promise<IUser>((resolve) => {
    resolve(user.data as IUser);
  });
};

const getUsers = () => {
  return new Promise<IUser[]>((resolve) => {
    resolve(users.data as IUser[]);
  });
};


export { getUserData, getUsers };
