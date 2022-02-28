import { styled } from '@mui/system';
import { Avatar as MUIAvatar } from '@mui/material';

interface IAvatarProps {
    size: number;
}

export const AvatarWrapper = styled('div')(({ size }: IAvatarProps) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: '#C8D2D5',
}));

export const Avatar = styled(MUIAvatar)(({ size }: IAvatarProps) => ({
    '&.MuiAvatar-root': {
        width: size,
        height: size,
    }
}));
