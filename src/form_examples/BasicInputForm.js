import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import phone from 'phone';

function BasicInputForm() {
  const [data, setData] = useState(null);

  return (
    <Formik
      initialValues={{ email: '', phoneNumber: '', preference: '' }}
      validate={values => {
        const errors = {};
        const { email, phoneNumber, preference } = values;
        if (!email) {
          errors.email = 'Email required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          errors.email = 'Invalid email address';
        }
        if (!phoneNumber) {
          errors.phoneNumber = 'Phone number required.';
        } else if (!phone(phoneNumber).length) {
          errors.phoneNumber = 'Invalid phone number.';
        }
        if (!preference) {
          errors.preference = 'Please choose a contact preference.';
        }
        return errors;
      }}
      onSubmit={(data, { setSubmitting }) => {
        setTimeout(() => {
          console.log('Data Submitted!', data);
          setData(data);
          setSubmitting(false);
          console.log('asdf');
        }, 1000);
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <BasicForm>
          <BasicField name="email" placeholder="Email" type="email" />
          {errors.email && touched.email && (
            <ErrorSpan>{errors.email}</ErrorSpan>
          )}
          <BasicField
            name="phoneNumber"
            placeholder="Phone Number"
            type="text"
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <ErrorSpan>{errors.phoneNumber}</ErrorSpan>
          )}
          <Field name="preference" as="select">
            <option value="" label="Contact Preference" disabled />
            <option value="email" label="email" />
            <option value="phone number" label="phone number" />
          </Field>

          {errors.preference && touched.preference && (
            <ErrorSpan>{errors.preference}</ErrorSpan>
          )}
          {isSubmitting ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              disabled={
                !(!!values.email && !!values.phoneNumber && !!values.preference)
              }
            >
              Submit
            </Button>
          )}
          {data && (
            <pre style={{ color: '#000', width: 500, fontSize: 12 }}>
              {JSON.stringify(values, null, 2)}
            </pre>
          )}
          <div>
            <span style={{ color: '#000', fontSize: '1rem' }}>errors</span>
            <pre style={{ color: '#000', width: 500, fontSize: 12 }}>
              {JSON.stringify(errors, null, 2)}
            </pre>
          </div>
        </BasicForm>
      )}
    </Formik>
  );
}

export default BasicInputForm;

const BasicForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  height: 80%;
`;

const BasicField = styled(Field)`
  font-size: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
`;

const ErrorSpan = styled.span`
  font-size: 0.8rem;
  color: red;
`;
