import React from 'react';
import {Form, Formik} from 'formik';
import * as Yup from 'yup'
import FormikControl from '../FormikControl/FormikControl';
import {StyledInpFormikControl, RadioFormikControl, StyledBetterButton} from './RegFormEx1Style'
import {BetterButton} from '../styletsx';
import {Button} from '@chakra-ui/react';

const modeOptions = [
  {key: 'Email', value:'email'},
  {key: 'Telephone', value:'phone'},
]

const RegFormEx1 = () => {

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    mode: '',
    phone: '',
    chakra: 'dd',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('инвалидный имейл').required('type in email please'),
    password: Yup.string().required('ну пароль-то уж всяко надо'),
    chakra: Yup.string().required('chakra надо'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')],'не совпадат'),
    mode: Yup.string().required('Нажми'),
    phone: Yup.string().when('mode',{
      is: 'phone',
      then: () => Yup.string().required('Телефон же вноси!')
    })
  })

  const onSubmit = ((values: typeof initialValues) => console.log(values))

  return (
    <div className="container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <StyledInpFormikControl name='email' label="Email" control='input' />
          <StyledInpFormikControl name='password' label="Password" control='input' type='password' />
          <StyledInpFormikControl name='confirmPassword' label="Confirm password" control='input' type='password' />

          <RadioFormikControl name='mode' label="Mode of Contact>" control='radio' type='radio' options={modeOptions} />

          <StyledInpFormikControl name='phone' label="Phone number" control='input' />

          <FormikControl name='chakra' label="chakra" control='chakraInput'  />

          <Button>Хаха кнопка</Button>
          <StyledBetterButton typeof='submit'>Submit</StyledBetterButton>
        </Form>
      </Formik>
    </div>
  );
};

export default RegFormEx1;
