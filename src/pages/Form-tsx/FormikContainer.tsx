import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {BetterButton} from './styletsx';
import FormikControl from './FormikControl/FormikControl';

const options = [
  {key:'красный', value:'red'},
  {key:'зеленый', value:'green'},
  {key:'желтый', value:'yellow'}
]

const radioOptions = [
  {key: 'Один', value: 'one'},
  {key: 'Два', value: 'two'},
]

export type OptionsType = Record<string, string>[]

const FormikContainer = () => {

  const initialValues = {
    inp1: 'ooo',
    text1: 'aaa2',
    select1: 'empty',
    radio1: '',
    checkbox1: false,
    checkbox2: true,
    checkboxGroup: ['red'],
    date1: null
  }

  const onSubmit = (values: typeof initialValues) => {
    console.log(values)
  }
  const validationSchema = Yup.object({
    inp1: Yup.string().required('Надо!'),
    text1: Yup.string().max(10, 'max 10!'),
    radio1: Yup.string().required('aaaa'),
    checkboxGroup: Yup.array().min(1, 'req')
  })

  return (
    <div className="container">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {
          (formik) => {
            // console.log(formik.errors)
            // console.log(formik.values)
            return <Form>
              <FormikControl control='input' name="inp1" type="text" label="Email"/>
              <FormikControl control='textarea' name="text1" label="Comments"/>
              <FormikControl control='select' name="select1" label="Выбери меня"/>
              <FormikControl control='radio' type='radio' name="radio1" label="Come on" options={radioOptions}/>
              <FormikControl control='checkbox' type='checkbox' name="checkbox1" label="good"/>
              <FormikControl control='checkbox' type='checkbox' name="checkbox2" label="very good"/>

              <FormikControl control='checkboxGroup' type='checkbox' name="checkboxGroup" label="trulala" options={options}/>

              <FormikControl control='date' name="date1" label="Choose your date" />

              <BetterButton type="submit">Submit</BetterButton>

            </Form>
          }
        }

      </Formik>
    </div>
  );
};

export default FormikContainer;
