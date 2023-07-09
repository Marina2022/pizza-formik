import React from 'react';
import {ErrorMessage, Field} from 'formik';
import {StyledSelect} from './SelectStyle';
import {iInput} from '../Input/Input';

const Select: React.FC<iInput> = ({name, label, ...rest}) => {

  const validateSelect = (value: string)=>{
    if (value === 'empty') return 'no no, not empty'}

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} validate={validateSelect}>
        {
          (prop: any) => <StyledSelect  {...prop.field} {...rest} >
            <option value="empty"></option>
            <option value="first">First Value</option>
            <option value="second">Second Value</option>
            <option value="third">Third Value</option>
          </StyledSelect>
        }
      </Field>
      <ErrorMessage name={name} component='div' className='error'/>
    </>
  );
};

export default Select;
