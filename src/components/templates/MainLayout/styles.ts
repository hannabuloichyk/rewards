import { styled } from '@mui/system';
import { Container as MUIContainer } from '@mui/material';

export const Container = styled(MUIContainer)(({ theme }) => ({
   marginTop: theme.spacing(5),
   height: `calc(100vh - ${theme.spacing(5)})`,
}));
