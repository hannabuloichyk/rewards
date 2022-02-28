import React from 'react';
import { Box } from '@mui/material';
import { TextFieldProps as MuiTextFieldProps } from 'formik-mui';


import { TextFiledStyled, FormLabel } from './styles';

const TextField = ({label, sx, ...props}: MuiTextFieldProps) => {
    return (
        <Box sx={sx}>
            <FormLabel htmlFor={props.id}>{label}</FormLabel>
            <TextFiledStyled {...props} size="medium" />
        </Box>
    );
};

export default TextField;
