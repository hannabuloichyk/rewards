import { styled } from '@mui/system';
import { FormLabel as MuiFormLabel } from '@mui/material';
import { TextField as MuiTextFiled } from 'formik-mui';

export const TextFiledStyled = styled(MuiTextFiled)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
}));
    
