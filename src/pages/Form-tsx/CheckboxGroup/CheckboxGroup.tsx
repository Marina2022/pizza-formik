import React from 'react';
import {Field, ErrorMessage} from 'formik';
import {StyledDiv, StyledCheck} from './CheckboxGroupStyle'

// Тут нет никакой логики - Формик сааам делает значение Филда value массивом, если внутри него инпуты с типом чекбокс.
// Сам добавляет в массив, убирает оттуда и все такое. Это Формик. Вот нужна ли такая магия, когда хз че откуда берется?

const CheckboxGroup = (props: any) => {
  const {options, name, label} = props
  return (
    <>
      <Field name={name}>
        {
          (props: any) => {
            const {field} = props
            return (
              <StyledDiv>
                {
                  options.map((option: any) => {
                    return (
                      <div key={option.value}>
                        <StyledCheck type="checkbox" {...field} value={option.value} id={option.value}
                               checked={field.value.includes(option.value)}/>
                        <label htmlFor={option.value}>{option.key}</label>
                      </div>
                    )
                  })
                }
              </StyledDiv>
            )
          }
        }
      </Field>
      <ErrorMessage name={name} component='div' className='error' />
    </>
  );
};

export default CheckboxGroup;
