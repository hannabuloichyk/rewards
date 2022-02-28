import { styled } from '@mui/system';

import Button from '../Button';

export const ButtonStyled = styled(Button)(({ theme }) => ({
    width: 50,
    height: 50,
    minWidth: 50,
    border: 'solid 1px',
    borderColor: theme.palette.grey[200],
    backgroundColor: theme.palette.grey[900],
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&.MuiButtonBase-root': {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
            boxShadow: 'none',
        },
    },

    '.MuiSvgIcon-root': {
        fontWeight: 900,
        width: 58,
        height: 58,
    },
}));
