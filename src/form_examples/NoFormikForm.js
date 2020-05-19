import React, { useState } from 'react';
import phone from 'phone';

function NoFormikForm() {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    contactPreference: '',
  });
  const [submit, setSubmit] = useState(false);
  const [formErrors, setErrors] = useState({
    email: '',
    phoneNumber: '',
    contactPreference: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors({});
    const errors = validator(formData);
    if (errors.email || errors.phoneNumber || errors.contactPreference) {
      setErrors({
        email: errors.email || '',
        phoneNumber: errors.phoneNumber || '',
        contactPreference: errors.contactPreference || '',
      });
    } else {
      setSubmit(true);
    }
  };

  const validator = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone number required';
    } else if (!phone(values.phoneNumber).length) {
      errors.phoneNumber = 'Invalid phone number.';
    }
    if (!values.contactPreference) {
      errors.contactPreference = 'Contact preference required';
    }
    return errors;
  };

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name={'email'}
          onChange={e => handleChange(e)}
        />
        <span style={{ fontSize: '0.8rem', color: 'red' }}>
          {formErrors.email}
        </span>
        <input
          type="text"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          name={'phoneNumber'}
          onChange={e => handleChange(e)}
        />
        <span style={{ fontSize: '0.8rem', color: 'red' }}>
          {formErrors.phoneNumber}
        </span>
        <select
          type="text"
          placeholder="Phone Number"
          value={formData.contactPreference}
          name={'contactPreference'}
          onChange={e => handleChange(e)}
        >
          <option disabled>Contact Preference</option>
          <option value="email">email</option>
          <option value="phone number">phone number</option>
        </select>
        <span style={{ fontSize: '0.8rem', color: 'red' }}>
          {formErrors.contactPreference}
        </span>
        <input
          disabled={
            !(
              !!formData.email &&
              !!formData.phoneNumber &&
              !!formData.contactPreference
            )
          }
          type="submit"
        ></input>
        {submit && (
          <pre style={{ color: '#000', width: 500, fontSize: 12 }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        )}
        Errors
        <span style={{ color: '#000', fontSize: '1rem' }}>errors</span>
        <pre style={{ color: '#000', width: 500, fontSize: 12 }}>
          {JSON.stringify(formErrors, null, 2)}
        </pre>
      </form>
    </div>
  );
}

export default NoFormikForm;
