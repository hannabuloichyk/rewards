import { styled } from '@mui/system';
import { Button } from '@mui/material';

import Icon from '../../atoms/Icon';

export const Wrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3),
    },
}));

export const IconStyled = styled(Icon)(({ theme }) => ({
    justifyContent: 'flex-end',
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
    minWidth: 0,
    padding: 0,
    position: 'absolute',
    right: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
        right: theme.spacing(3),
    },
}));

export const FormWrapper = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3),
    },
}));