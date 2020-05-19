import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';

function TuesdayExample() {
  return (
    <Formik
      initialValues={{ address: '', phoneNumber: '' }}
      validate={values => {}}
      onSubmit={data => {
        console.log(data);
      }}
    >
      {() => (
        <Form>
          <Field name="address" placeholder="address"></Field>
          <Field name="phoneNumber" placeholder="phonenumber"></Field>
          <input type="submit" placeholder="submit" />
        </Form>
      )}
    </Formik>
  );
}

export default TuesdayExample;
