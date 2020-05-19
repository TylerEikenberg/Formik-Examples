import React from 'react';
import './App.css';

import MUIFormExample from './form_examples/MUIFormExample';
import BasicInputForm from './form_examples/BasicInputForm';
import TuesdayExample from './form_examples/TuesdayExample';
import NoFormikForm from './form_examples/NoFormikForm';

export default function App() {
  return (
    <div className="App-header">
      <div className="formContainer">
        <MUIFormExample />
      </div>
      <div className="formContainer">
        <BasicInputForm />
      </div>
      <div className="formContainer">
        <TuesdayExample />
      </div>
      <div className="formContainer">
        <NoFormikForm />
      </div>
    </div>
  );
}
