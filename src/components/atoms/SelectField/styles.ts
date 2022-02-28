import { styled } from '@mui/system';
import { FormLabel as MuiFormLabel } from '@mui/material';

export const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
}));
    
export const FieldWrapper = styled('div')(({ theme }) => ({
    '.MuiFormControl-root': {
        minWidth: '100%',
    },
    marginBottom: theme.spacing(1),
}));