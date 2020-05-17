import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

function MUIFormExample() {
  const [data, setData] = useState(null);

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      validate={values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'First Name Required';
        }
        if (!values.lastName) {
          errors.lastName = 'Last Name Required';
        }
        return errors;
      }}
      onSubmit={(data, { setSubmitting }) => {
        setTimeout(() => {
          console.log('Data Submitted!', data);
          setData(data);
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ values, isSubmitting, errors, touched }) => (
        <Form>
          <Field
            as={StyledTextField}
            name="firstName"
            label="first name"
            type="input"
            fullWidth
            variant="outlined"
            size="small"
            error={!!errors.firstName && !!touched.firstName}
            helperText={
              !!errors.firstName && !!touched.firstName
                ? errors.firstName
                : null
            }
          />
          <Field
            as={StyledTextField}
            name="lastName"
            type="input"
            label="last name"
            variant="outlined"
            fullWidth
            style={{ marginTop: 20 }}
            size="small"
            error={!!errors.lastName && !!touched.lastName}
            helperText={
              !!errors.lastName && !!touched.lastName ? errors.lastName : null
            }
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {isSubmitting ? (
              <CircularProgress />
            ) : (
              <StyledButton
                type="submit"
                disabled={!(!!values.firstName && !!values.lastName)}
              >
                Submit
              </StyledButton>
            )}
          </div>
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
        </Form>
      )}
    </Formik>
  );
}

export default MUIFormExample;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: rgba(33, 150, 243, 0.2);
    &:hover {
      background-color: rgba(33, 150, 243, 0.5);
    }
  }

  .MuiOutlineInput-root.Mui-focused {
    background-color: rgba(33, 150, 243, 0.1);
  }
  .MuiFormLabel-root {
    color: rgba(33, 150, 243, 0.9);
  }
`;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    margin-top: 10px;
    background-color: rgba(33, 150, 243, 0.8);
    color: #fff;
    width: 100px;
  }
  &.MuiButton-root:hover {
    background-color: rgba(33, 150, 243, 1);
  }
  &.MuiButton-root.Mui-disabled {
    background-color: rgba(33, 150, 243, 0.2);
    color: #rgba(33, 150, 243, 0.2);
  }
`;
