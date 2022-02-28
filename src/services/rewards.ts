import { IRewardItem } from '../types/IRewardItem';
import rewards from '../data/rewards.json';

const getRewardsByUserId = (userId: string) => {
  return new Promise<IRewardItem[]>((resolve) => {
    resolve(rewards.data as IRewardItem[]);
  });
};

export { getRewardsByUserId };
