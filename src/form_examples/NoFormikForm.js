import React, { useState } from 'react';

function NoFormikForm() {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    contactPreference: '',
  });
  const [submit, setSubmit] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validator(formData);
    if (errors.email || errors.phoneNumber || errors.contactPreference) {
      console.log(errors);
    } else {
      setSubmit(true);
    }
  };

  const validator = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone number required';
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
        <input
          type="text"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          name={'phoneNumber'}
          onChange={e => handleChange(e)}
        />
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
        <input type="submit"></input>
        {submit && (
          <pre style={{ color: '#000', width: 500, fontSize: 12 }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        )}
      </form>
    </div>
  );
}

export default NoFormikForm;
