import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';

type IButtonProps = MUIButtonProps;

const Button: React.FC<IButtonProps> = ({ children, ...props }) => (
    <MUIButton {...props} sx={{ textTransform: 'none', fontWeight: 700, p: '10px 20px' }}>
        {children}
    </MUIButton>
);

export default Button;