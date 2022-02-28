import React from 'react';
import { Grid, Typography } from '@mui/material';
import moment from 'moment';

import AvatarImage from '../../atoms/AvatarImage';
import { IRewardItem } from '../../../types/IRewardItem';
import { CreatedDate } from './styles';

interface IRewardItemProps {
    rewardItem: IRewardItem;
}

const RewardItem = ({ rewardItem }: IRewardItemProps) => {
    return (
        <Grid container sx={{ mb: 3 }}>
            <Grid container item sm={1} xs={3} sx={{ mr: 1 }} alignItems='flex-start'>
                <AvatarImage user={rewardItem.from} />
            </Grid>
            <Grid container item sm={10} xs={8}>
                <Grid container item direction="column">
                    <Typography variant="body2">{rewardItem.to.name} rewardered by {rewardItem.from.name}</Typography>
                    <CreatedDate>{moment(rewardItem.date).fromNow()}</CreatedDate>
                    <Typography sx={{ mt: 1 }}>{rewardItem.comment}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RewardItem;