import account from '../data/account.json';
import { IAccount } from '../types/IAccount';

const getUserAccount = (userId: string) => {
  return new Promise<IAccount>((resolve) => {
    resolve(account.data as IAccount);
  });
};

export { getUserAccount };
