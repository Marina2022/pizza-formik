import {ErrorMessage} from 'formik';
import {StyledField} from './InputStyle'
import React from 'react';
import {OptionsType} from '../FormikContainer';

export interface iInput {
  name: string;
  label: string;
  type?: string;
  className?: any;
  options?: OptionsType
}

const Input: React.FC<iInput> = ({name, label, className, ...rest}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <StyledField name={name}  {...rest} />
      <ErrorMessage name={name} component='div' className='error'/>
    </div>
  );
};

export default Input;
