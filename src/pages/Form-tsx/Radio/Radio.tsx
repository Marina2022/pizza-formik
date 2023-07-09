import React from 'react';
import {iInput} from '../Input/Input';
import {ErrorMessage, Field} from 'formik';
import {StyledRadio, StyledLabel, FlexCenter} from './RadioStyle'

// вытащила из stackoverflow интерфейс - больно как хорош
export interface FieldProps {
  field: {
    name: string;
    value: any;
    onChange: (event: React.ChangeEvent<any>) => void;
    onBlur: (event: React.FocusEvent<any>) => void;
  };
  form: {
    touched: { [field: string]: boolean };
    errors: { [field: string]: string };
  };
  meta: {
    error?: string;
    touched?: boolean;
  };
}

const Radio: React.FC<iInput> = ({name, label, options, className, ...rest}) => {

  return (
    <>

      <Field name={name}>
        {
          ({field, form, meta}: FieldProps) => {
            return (
              <div className={className}>
                {
                  options && options.map((option) => {
                    return (
                      <FlexCenter key={option.value} >
                        <StyledRadio {...rest} id={name} {...field} value={option.value}
                                     checked={field.value === option.value}/>
                        <StyledLabel htmlFor={name}>{option.key}</StyledLabel>
                      </FlexCenter>
                    )
                  })
                }

              </div>
            )
          }}
      </Field>
      <ErrorMessage name={name} component='div' className='error'/>
    </>
  )
};

export default Radio;
