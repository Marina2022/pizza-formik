import React from 'react';
import {ErrorMessage, Field} from 'formik';
import {iInput} from '../Input/Input';
import {StyledTextarea} from './TextareaStyle';

const Textarea: React.FC<iInput> = ({name, label, ...rest}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {
          (prop: any) => <StyledTextarea {...prop.field} {...rest} ></StyledTextarea>
        }
      </Field>
      <ErrorMessage name={name} component='div' className='error'/>
    </>
  );
};

export default Textarea;
