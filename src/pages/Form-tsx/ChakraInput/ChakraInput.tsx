import {FormControl, Input, FormLabel, FormErrorMessage} from '@chakra-ui/react';
import {Field} from 'formik';
import React from 'react';
import {iInput} from '../Input/Input';

const ChakraInput:React.FC<iInput> = ({name, label, ...rest}) => {
  return (
    <div>

      <Field name={name}>
        {
          (props: any) => {
            const {field, form} = props
            return (
              <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                <FormLabel>{label}</FormLabel>
                <Input  {...field} {...rest} />
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
              </FormControl>
            )
          }
        }

      </Field>

    </div>
  );
};

export default ChakraInput;
