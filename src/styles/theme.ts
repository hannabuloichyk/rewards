import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#3232ff',
            contrastText: 'white',
        },
        secondary: {
            main: '#0000ff'
        },
        grey: {
            200: '#AFBDCE',
            900: '#23303d',
        },
        background: {
            default: '#ffffff',
            paper: '#e9e9e9'
        },
        text: {
            primary: '#000000',
        }
    },
    spacing: 8,
});
