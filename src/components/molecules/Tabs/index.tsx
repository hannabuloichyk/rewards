import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Grid } from '@mui/material';

import RewardsList from '../RewardsList';
import { TabPanelStyled, TabPanels, AddButtonStyled, Tab, TabsStyled } from './styles';
import AddNewRewardPopup from '../../organisms/AddNewRewardPopup';
import { IRewardItem } from '../../../types/IRewardItem';
import { getRewardsByUserId } from '../../../services/rewards';
import { AppContext } from '../../../App';

type ITabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
  }

const TabPanel = ({ children, value, index, ...other }: ITabPanelProps) => (
    <TabPanelStyled
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && children}
    </TabPanelStyled>
);

const Tabs = () => {
    const { currentUser, onChange, account } = useContext(AppContext);
    const [value, setValue] = React.useState(0);
    const [isOpenedPopup, setIsOpenedPopup] = React.useState(false);
    const [rewardsList, setRewardsList] = useState<IRewardItem[]>();

    useEffect(() => {
        if (!rewardsList) {
            (async () => {
                const rewardsList = await getRewardsByUserId('');
                setRewardsList(rewardsList);
            })();
        }
    });

    const tabs = [{
        label: 'Feed',
        value: 0,
        renderContent: (value, index) => (
            <TabPanel value={value} index={index} key={index}>
                {rewardsList && (
                    <RewardsList rewards={rewardsList} />
                )}
            </TabPanel>
        )
    }, {
        label: 'My Rewards',
        value: 1,
        renderContent: (value, index) => {
            const myRewards = rewardsList?.filter((reward) => reward.to.userId === currentUser.userId);

            return (
                <TabPanel value={value} index={index} key={index}>
                    {myRewards && (
                        <RewardsList rewards={myRewards} />
                    )}
                </TabPanel>
            );
        }
    }];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAddNewReward = useCallback(() => {
        setIsOpenedPopup(true);
    }, []);

    const handleCloseNewRewardPopup = useCallback(() => {
        setIsOpenedPopup(false);
    }, []);

    const handleSubmitNewReward = useCallback((reward: IRewardItem) => {
        setRewardsList(rewardsList.concat(reward));
        if (reward.from.userId === currentUser.userId) {
            onChange({
                account: {
                    ...account,
                    givenRewards: account.givenRewards + reward.reward,
                }
            });
        }
        handleCloseNewRewardPopup();
    }, [rewardsList, account, onChange, currentUser, handleCloseNewRewardPopup]);

    return (
        <Grid container>
            <Grid container item sx={{ mt: 2, mb: 0.5 }}>
                <TabsStyled
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    {tabs.map((tab) => (
                        <Tab key={tab.value} label={tab.label} value={tab.value} />
                    ))}
                </TabsStyled>
            </Grid>
            <TabPanels container>
                <AddButtonStyled onClick={handleAddNewReward} />
                {tabs.map((tab, index) => tab.renderContent(value, index))}
            </TabPanels>
            <AddNewRewardPopup
                open={isOpenedPopup}
                handleClose={handleCloseNewRewardPopup}
                onSubmit={handleSubmitNewReward}
            />
        </Grid>
    );
};

export default Tabs;