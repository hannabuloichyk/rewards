import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

import { IconWrapper } from './styles';

interface IIconProps {
    color?: string;
    fontSize?: 'medium' | 'inherit' | 'large' | 'small';
    Component: typeof SvgIcon,
}

const Icon = ({ color = '#8BA1A8', fontSize = 'medium', Component, ...props }: IIconProps) => (
    <IconWrapper>
        <Component fontSize={fontSize} style={{ color: color }} {...props} />
    </IconWrapper>
);

export default Icon;