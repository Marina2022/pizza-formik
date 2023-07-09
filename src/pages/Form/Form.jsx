import React from 'react';
import {BetterInput, BetterLabel, BetterButton, StyledTitle} from "./style";
import {useFormik} from "formik";


const Form = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <div className="container">
      <StyledTitle>form js</StyledTitle>
      <BetterLabel htmlFor="name" >Name</BetterLabel>
      <BetterInput type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>

      <BetterLabel htmlFor="email" >E-mail</BetterLabel>
      <BetterInput type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>

      <BetterLabel htmlFor="channel" >Channel</BetterLabel>
      <BetterInput type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>

      <BetterButton>Submit</BetterButton>

    </div>
  );
};

export default Form;
