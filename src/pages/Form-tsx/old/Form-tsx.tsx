import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {BetterInput, BetterLabel, BetterButton, FormControl, StyledTitle} from "../styletsx";
import {Form, Formik, useFormik, ErrorMessage} from 'formik';
import * as Yup from 'yup'


const FormTsx = () => {

  const initialValues = {
    yourName: '',
    email: '',
    channel: '',
  }

  // const validate = (values: typeof initialValues) => {
  //   let errors = {name: '', email: '', channel: ''}
  //   if (values.name === '') errors.name = 'Name not empty'
  //   if (!values.email) errors.email = 'Email not empty'
  //   else if (!values.email.includes('@')) errors.email = 'Where is @?'
  //   if (values.channel === '') errors.channel = 'Channel not empty'
  //   return errors
  // }


  const validationSchema = Yup.object({
    yourName: Yup.string().required(`insert name too`),
    email: Yup.string().required('insert email').email('invalid is your email'),
    channel: Yup.string().required('add channel!')
  })

  const
    formik = useFormik({
      initialValues,
      onSubmit: (values) => {
        alert('первая форма')
      },
      // validate
      validationSchema
    })

  return (
    <div className="container">
      <StyledTitle>form tsx</StyledTitle>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <BetterLabel htmlFor="yourName">Name</BetterLabel>

          {/*<BetterInput type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                       value={formik.values.name}/>
          {formik.errors.name && formik.touched.name && <div style={{'color': 'red'}}>{formik.errors.name}</div>*/}

          {/*Меняем три пропа OnChange, onBlur и Value !!! атрибут name тоже надо убрать, он из этой функции подставится - на getFieldProps (видимо возвращает объект, поэтому спред надо написать, ниже:*/}

          <BetterInput type="text" id="yourName" {...formik.getFieldProps('yourName')} />
          {formik.errors.yourName && formik.touched.yourName &&
            <div style={{'color': 'red'}}>{formik.errors.yourName}</div>}
        </FormControl>

        <FormControl>
          <BetterLabel htmlFor="email">E-mail</BetterLabel>
          <BetterInput type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}
                       onBlur={formik.handleBlur}/>
          {formik.errors.email && formik.touched.email && <div style={{'color': 'red'}}>{formik.errors.email}</div>}
        </FormControl>

        <FormControl>
          <BetterLabel htmlFor="channel">Channel</BetterLabel>
          <BetterInput type="text" id="channel" name="channel" onChange={formik.handleChange}
                       value={formik.values.channel} onBlur={formik.handleBlur}/>
          {formik.errors.channel && formik.touched.channel &&
            <div style={{'color': 'red'}}>{formik.errors.channel}</div>}
        </FormControl>
        <BetterButton type="submit">Submit</BetterButton>
      </form>

      <br/>
      <hr/>
      <br/>
      <br/>

      <h2>Тут делаем через компоненты, а не useFormik</h2>
      <br/>

      <Formik
        initialValues={initialValues}  onSubmit ={(values) =>
        console.log('вторая форма')} validationSchema={validationSchema}>
        {/*<Form onSubmit={formik.handleSubmit}>*/}
        <Form>
          <FormControl>
            <BetterLabel htmlFor="yourName">Name</BetterLabel>

            {/*<BetterInput type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur}
                       value={formik.values.name}/>
          {formik.errors.name && formik.touched.name && <div style={{'color': 'red'}}>{formik.errors.name}</div>*/}

            {/*Меняем три пропа OnChange, onBlur и Value !!! атрибут name тоже надо убрать, он из этой функции подставится - на getFieldProps (видимо возвращает объект, поэтому спред надо написать, ниже:*/}

            <BetterInput type="text" id="yourName" {...formik.getFieldProps('yourName')} />
            <ErrorMessage name="name"/>  // это я попыталась - ниче не работает
            {/*{formik.errors.yourName && formik.touched.yourName &&*/}
            {/*  <div style={{'color': 'red'}}>{formik.errors.yourName}</div>}*/}
          </FormControl>

          <FormControl>
            <BetterLabel htmlFor="email">E-mail</BetterLabel>
            <BetterInput type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}
                         onBlur={formik.handleBlur}/>
            {formik.errors.email && formik.touched.email && <div style={{'color': 'red'}}>{formik.errors.email}</div>}
          </FormControl>

          <FormControl>
            <BetterLabel htmlFor="channel">Channel</BetterLabel>
            <BetterInput type="text" id="channel" name="channel" onChange={formik.handleChange}
                         value={formik.values.channel} onBlur={formik.handleBlur}/>
            {formik.errors.channel && formik.touched.channel &&
              <div style={{'color': 'red'}}>{formik.errors.channel}</div>}
          </FormControl>
          <BetterButton type="submit">Submit me</BetterButton>
        </Form>
      </Formik>
    </div>
  );
};

export default FormTsx;
