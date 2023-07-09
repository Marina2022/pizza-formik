import {StyledDiv} from './FormikControlStyle'
import React, {ReactNode} from 'react';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Select from '../Select/Select';
import Radio from '../Radio/Radio';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import {OptionsType} from '../FormikContainer';
import DatePicker from '../DatePicker/DatePicker';
import ChakraInput from '../ChakraInput/ChakraInput';

interface iFormikControl {
  control: string;
  name: string;
  type?: string;
  label: string;
  as?: string;
  value?: string;
  options?: OptionsType;
  className?: any;
}

const FormikControl: React.FC<iFormikControl> = ({control, className, ...rest}) => {
  let Component: React.FC<Omit <iFormikControl, 'control'>>

  switch (control) {
    case 'input':
      Component = Input
      break
    case 'textarea':
      Component = Textarea
      break
    case 'select':
      Component = Select
      break
    case 'radio':
      Component = Radio
      break
    case 'checkbox':
      Component = Checkbox
      break
    case 'checkboxGroup':
      Component = CheckboxGroup
      break
    case 'date':
      Component = DatePicker
      break
    case 'chakraInput':
      Component = ChakraInput
      break
    default:
      return null
  }

  return (
    <StyledDiv>
      <Component className={className} {...rest} />
    </StyledDiv>
  );
};

export default FormikControl;
