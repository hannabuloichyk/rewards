import { IUser } from './IUser';

export interface IRewardItem {
    from: IUser;
    to: IUser;
    date: string;
    comment: string;
    reward: number;
}