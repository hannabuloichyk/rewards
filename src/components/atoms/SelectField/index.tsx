import React from 'react';
import { SelectProps as MuiSelectProps, MenuItem } from '@mui/material';
import { Select } from 'formik-mui';
import { Field } from 'formik';

import { IUser } from '../../../types/IUser';
import { FormLabel, FieldWrapper } from './styles';

interface ISelectFieldProps extends MuiSelectProps {
    items: IUser[],
}

const SelectField = ({items, label, ...props}: ISelectFieldProps) => {
    return (
        <>
            <FormLabel htmlFor={props.id}>{label}</FormLabel>
            <FieldWrapper>
                <Field
                    component={Select}
                    id="userId"
                    name="userId"
                    fullWidth
                    {...props}
                >
                    {items.map((item) => (
                        <MenuItem value={item.userId} key={item.userId}>{item.name}</MenuItem>
                    ))}
                </Field>
            </FieldWrapper>
        </>
    );
};

export default SelectField;
