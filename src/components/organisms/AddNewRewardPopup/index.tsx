import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from '@mui/material';

import Icon from '../../atoms/Icon';
import AddNewRewardForm from '../forms/AddNewRewardForm';
import { IRewardItem } from '../../../types/IRewardItem';
import { getUsers } from '../../../services/user';
import { Wrapper, ButtonStyled, FormWrapper } from './styles';
import { IUser } from '../../../types/IUser';

interface IAddNewRewardPopupProps {
    open: boolean;
    handleClose: () => void;
    onSubmit: (rewardItem: IRewardItem) => void;
}

const AddNewRewardPopup = ({ open, handleClose, onSubmit }: IAddNewRewardPopupProps) => {
    const [users, setUsers] = useState<IUser[]>();

    useEffect(() => {
        (async () => {
            const users = await getUsers();
            setUsers(users);
        })();
    });

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <Wrapper>
            <ButtonStyled onClick={handleClose}>
                <Icon Component={CloseIcon} />
            </ButtonStyled>
            <FormWrapper sx={{ mt: 5 }}>
                <AddNewRewardForm onSubmit={onSubmit} users={users} />
            </FormWrapper>
        </Wrapper>
      </Dialog>
    );
};

export default AddNewRewardPopup;