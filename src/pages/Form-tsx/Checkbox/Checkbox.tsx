import React from 'react';
import {Field} from 'formik';
import {StyledLabel, CheckInput} from './CheckboxStyle'
import {FieldProps} from '../Radio/Radio';

const Checkbox = (props: any) => {
  const {label, name, ...rest} = props
  return (
    <>
      <Field name={name} >
        {
          (props: FieldProps) => {
            const {field} = props
            return <CheckInput {...rest} {...field} checked={field.value === true} id={name} />
          }
        }
      </Field>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
    </>
  );
};

export default Checkbox;
