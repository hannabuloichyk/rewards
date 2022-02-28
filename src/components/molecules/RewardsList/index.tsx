import React from 'react';
import { Grid } from '@mui/material';

import RewardItem from '../RewardItem';
import { IRewardItem } from '../../../types/IRewardItem';

interface IRewardsListProps {
    rewards: IRewardItem[];
}

const RewardsList = ({ rewards }: IRewardsListProps) => {
    return (
        <Grid container>
            {
                rewards?.map((rewardItem) => (
                    <Grid container item key={rewardItem.date}>
                        <RewardItem rewardItem={rewardItem} />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default RewardsList;