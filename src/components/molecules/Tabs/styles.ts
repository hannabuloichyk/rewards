import { styled } from '@mui/system';
import { Grid, Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';

import AddButton from '../../atoms/AddButton';

export const TabPanels = styled(Grid)(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 250px)',
    backgroundColor: theme.palette.background.paper,
    borderTop: `solid 3px ${theme.palette.grey[200]}`,
    position: 'relative',
}));

export const TabsStyled = styled(MuiTabs)(({ theme }) => ({
    marginLeft: theme.spacing(6),
    '& .MuiTabs-indicator': {
        height: 4,
    }
}));

export const TabPanelStyled = styled('div')(({ theme }) => ({
    padding: theme.spacing(5),
    width: '100%',
}));

export const Tab = styled(MuiTab)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    padding: 0,
    marginRight: theme.spacing(3),
}));

export const AddButtonStyled = styled(AddButton)(({ theme }) => ({
    position: 'absolute',
    right: theme.spacing(4),
    top: -25,
}));
