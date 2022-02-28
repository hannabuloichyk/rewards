import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';

import Tabs from '../../molecules/Tabs';
import AvatarImage from '../../atoms/AvatarImage';
import { AppContext } from '../../../App';

const Rewards = () => {
    const { currentUser, account } = useContext(AppContext);
    
    return (
        <Grid container>
            {currentUser && account && (
                <>
                    <Grid container item spacing={2}>
                        <Grid container item sm={3} xs={4} alignItems='center' direction='column'>
                            <AvatarImage user={currentUser} size={70} />
                            <Typography variant='body1'>{currentUser.name}</Typography>
                        </Grid>
                        <Grid container item sm={3} xs={4} justifyContent='center' direction='column'>
                            <Typography variant='body1'>My Rewards</Typography>
                            <Typography variant='h6'>${account.receivedRewards}</Typography>
                        </Grid>
                        <Grid container item sm={3} xs={4} justifyContent='center' direction='column'>
                            <Typography variant='body1'>Give</Typography>
                            <Typography variant='h6'>${account.givenRewards}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Tabs />
                    </Grid>
                </>
            )}
        </Grid>
    )
}

export default Rewards;