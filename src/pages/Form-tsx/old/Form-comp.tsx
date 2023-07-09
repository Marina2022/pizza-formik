import React, {ReactNode} from 'react';
import {BestError, BetterButton, BetterInput, BetterLabel, FormControl} from "../styletsx";
import {ErrorMessage, Field, FieldArray, Form, Formik} from 'formik';
import * as Yup from 'yup'

const Divva: React.FC<{ children?: ReactNode }> = (props) => {
  return <div style={{'color': 'red'}}>
    {props.children}
  </div>
}

const FormComp = () => {

  const initialValues = {
    yourName: 'r',
    email: 't@f',
    channel: 'e',
    phones: [''],
    test: ''
  }


  const validationSchema = Yup.object({
    yourName: Yup.string().required(`insert name too`),
    email: Yup.string().required('insert email').email('invalid is your email'),
    channel: Yup.string().required('add channel!')
  })

  const commentsValidate = (value: string) => {
    let error
    if (!value) error = 'come on, where are comments?'
    return error
  }

  return (
    <div className="container">

      <h2>Тут делаем через компоненты, а не useFormik</h2>
      <br/>

      <Formik
        initialValues={initialValues}
        onSubmit={
          (values, onSubmitForm) => {
            onSubmitForm.resetForm()
          }
        }
        validationSchema={validationSchema}>

        <Form>
          <FormControl>
            <BetterLabel htmlFor="yourName">Name</BetterLabel>
            <BetterInput id="yourName" name="yourName"/>
            <ErrorMessage name="yourName" component={BestError}/>
            <ErrorMessage name="yourName" component='div' className='error'/>
          </FormControl>

          <FormControl>
            <BetterLabel htmlFor="email">E-mail</BetterLabel>
            <BetterInput id="email" name="email"/>
            <ErrorMessage name="email">
              {(errorMessage) => <div style={{'color': 'green'}}>{errorMessage}</div>}
            </ErrorMessage>
          </FormControl>

          <FormControl>
            <BetterLabel htmlFor="channel">Channel</BetterLabel>
            <BetterInput id="channel" name="channel"/>
            <ErrorMessage name="channel" component={Divva}/>
          </FormControl>

          <FormControl>
            <BetterLabel htmlFor="test">Test</BetterLabel>
            <BetterInput id="test" name="test" color="red" mama="Marina" validate={commentsValidate}/>
            <ErrorMessage name="test" component='div' className='error'/>

            <ErrorMessage name="comments" component={Divva}/>
          </FormControl>

          <FormControl>
            <FieldArray name="phones">
              {
                (props) => {
                  const {form, remove, push} = props;
                  return <div>
                    {
                      form.values.phones.map((item: string, index: number) => {
                        return <div key={index}>
                          <Field name={`phones[${index}]`}/>
                          <button disabled={form.values.phones.length === 1} onClick={() => remove(index)}
                                  style={{'width': 30}}> -
                          </button>
                          <button onClick={() => push('')} style={{'width': 30}}> +</button>
                        </div>
                      })
                    }
                  </div>
                }
              }
            </FieldArray>
          </FormControl>

          <FormControl>
            <Field>
              {(props: any) => {
                const {form} = props
                console.log(form.errors)
                return (
                  <>
                    <BetterButton type='button' onClick={() => form.validateField('test')}>
                      validate
                    </BetterButton>
                    <br/>
                    <BetterButton type='button' onClick={() => form.setFieldTouched('test')}>
                      touch
                    </BetterButton>
                  </>

                )
              }
              }
            </Field>

          </FormControl>

          <BetterButton type="submit">Submit me</BetterButton>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComp;
