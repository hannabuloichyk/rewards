import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Icon from '../Icon';
import { ButtonStyled } from './styles';

const AddButton = (props) => (
    <ButtonStyled {...props}>
        <Icon Component={AddCircleIcon} color="white" />
    </ButtonStyled>
);

export default AddButton;