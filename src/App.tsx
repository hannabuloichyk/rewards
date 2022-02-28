import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './styles/theme';
import Rewards from './components/organisms/Rewards';
import MainLayout from './components/templates/MainLayout';
import { getUserData } from './services/user';
import { IUser } from './types/IUser';
import { IAccount } from './types/IAccount';
import { getUserAccount } from './services/account';

interface IAppContext {
    currentUser?: IUser;
    account?: IAccount;
}

export const AppContext = React.createContext({ currentUser: null, account: null, onChange: (props: IAppContext) => {} });

const App = () => {
    const [currentUser, setCurrentUser] = useState<IUser>();
    const [account, setAccount] = useState<IAccount>();

    useEffect(() => {
        if (!currentUser || !account) {
            (async () => {
                const user = await getUserData();
                setCurrentUser(user);
    
                const userAccount = await getUserAccount(user.userId);
                setAccount(userAccount);
            })();
        }
    });

    const onChange = ({ account }: IAppContext) => {
        setAccount(account);
    };

    const value = useMemo(
        () => ({ account, currentUser, onChange }), 
        [account]
    );

    return (
        <AppContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                <MainLayout>
                    <Rewards />
                </MainLayout>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default App;