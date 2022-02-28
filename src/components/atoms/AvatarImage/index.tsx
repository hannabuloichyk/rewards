import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

import Icon from '../Icon';
import { IUser } from '../../../types/IUser';
import { AvatarWrapper, Avatar } from './styles';

interface IAvatarImageProps {
    user: IUser;
    size?: number;
}

const AvatarImage = ({ user, size = 50 }: IAvatarImageProps) => (
    <AvatarWrapper size={size} >
        {user.avatarUrl ? (
            <Avatar alt={user.name} src={user.avatarUrl} size={size} />
        ) : (
            <Icon Component={PersonIcon} />
        )}
    </AvatarWrapper>
);

export default AvatarImage;