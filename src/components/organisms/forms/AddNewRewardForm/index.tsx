import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../../../atoms/Button';
import { IRewardItem } from '../../../../types/IRewardItem';
import { IUser } from '../../../../types/IUser';
import SelectField from '../../../atoms/SelectField';
import { AppContext } from '../../../../App';
import TextField from '../../../atoms/TextField';
import { ButtonWrapper } from './styles';

export interface IAddNewRewardFormProps {
    onSubmit: (
      values: IRewardItem,
    ) => void;
    users: IUser[],
}

const validationSchema = Yup.object({
    userId: Yup.string()
        .required("Required"),
    reward: Yup.number()
        .min(1, 'Min value 1')
        .required("Required"),
    comment: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required")
});

const initialValues = {
    userId: '',
    comment: '',
    reward: '',
};

const AddNewRewardForm = ({ onSubmit, users }: IAddNewRewardFormProps) => {
    const { currentUser } = useContext(AppContext);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                onSubmit({
                    date: (new Date()).toUTCString(),
                    comment: values.comment,
                    reward: +values.reward,
                    to: values.userId ? users.find((user) => user.userId === values.userId) : null,
                    from: currentUser,
                });
            }}
            validationSchema={validationSchema}
        >
        {() => {
            return (
                <Form>
                    <SelectField
                        items={users}
                        id="userId"
                        label="To"
                        name="userId"
                        fullWidth
                        disabled={false}
                    />
                    <Field
                        component={TextField}
                        id="reward"
                        label="Reward, $"
                        name="reward"
                        fullWidth
                        type="number"
                        placeholder="30"
                        sx={{ mt: 2 }}
                    />
                    <Field
                        component={TextField}
                        id="comment"
                        label="Why?"
                        name="comment"
                        fullWidth
                        type="text"
                        multiline={true}
                        minRows={5}
                        maxRows={5}
                        sx={{ mt: 2 }}
                    />
                    <ButtonWrapper>
                        <Button type="submit" color="primary" variant="contained">
                            Reward
                        </Button>
                    </ButtonWrapper>
                </Form>
            )}}
        </Formik>
    );
};

export default AddNewRewardForm;
